"use client";

import { useEffect } from "react";

/** Ported verbatim from the design's inline <script>, split into one effect per
 *  original IIFE. The ticker and bigmq marquee lanes are duplicated in JSX
 *  instead of via innerHTML += innerHTML (avoids fighting React's own DOM
 *  ownership of that subtree); everything else is a 1:1 port. */
export default function Effects() {
  // ── Tweaks ──
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const TWEAKS: { accent: string; motion: string } = { accent: "#0f1115", motion: "full" };
    const panel = document.getElementById("tw");
    const twX = document.getElementById("twX");
    if (!panel || !twX) return;
    const sws = Array.prototype.slice.call(panel.querySelectorAll(".tw__sw")) as HTMLElement[];
    const mos = Array.prototype.slice.call(panel.querySelectorAll(".tw__opt")) as HTMLElement[];

    function hexToRgb(h: string) {
      const n = parseInt(h.slice(1), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function render() {
      const r = document.documentElement;
      const c = hexToRgb(TWEAKS.accent);
      const lum = (0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2]) / 255;
      r.style.setProperty("--ac", TWEAKS.accent);
      r.style.setProperty("--ac-glow", "rgba(" + c.join(",") + ",0.14)");
      r.style.setProperty("--ac-ink", lum > 0.55 ? "#0f1115" : "#ffffff");
      document.body.setAttribute("data-motion", TWEAKS.motion);
      sws.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.ac === TWEAKS.accent)));
      mos.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mo === TWEAKS.motion)));
    }
    function save(k: "accent" | "motion", v: string) {
      TWEAKS[k] = v;
      render();
      try {
        window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
      } catch {}
    }
    sws.forEach((b) => b.addEventListener("click", () => save("accent", b.dataset.ac!), { signal }));
    mos.forEach((b) => b.addEventListener("click", () => save("motion", b.dataset.mo!), { signal }));
    twX.addEventListener(
      "click",
      () => {
        panel.hidden = true;
        try {
          window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
        } catch {}
      },
      { signal }
    );
    window.addEventListener(
      "message",
      (e: MessageEvent) => {
        const d = e.data || {};
        if (d.type === "__activate_edit_mode") panel.hidden = false;
        else if (d.type === "__deactivate_edit_mode") panel.hidden = true;
      },
      { signal }
    );
    render();
    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch {}

    return () => controller.abort();
  }, []);

  // ── reveal on scroll ──
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv, .pipe__row").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── live terminal ──
  useEffect(() => {
    const body = document.getElementById("termBody");
    if (!body) return;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeouts.push(id);
      return id;
    };

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scenes: [string, string][][] = [
      [
        ["t-p", "$ "], ["t-c", "curl -s api.amonca.dev/v1/status"], ["nl", ""],
        ["t-d", "→ 200 OK · 21ms"], ["nl", ""],
        ["t-k", "{ "], ["t-s", '"products_live"'], ["t-c", ": 6, "], ["t-s", '"uptime"'], ["t-c", ": "], ["t-s", '"99.98%"'], ["t-c", ", "], ["t-s", '"pagers_tonight"'], ["t-c", ": 0 "], ["t-k", "}"], ["nl", ""], ["nl", ""],
      ],
      [
        ["t-p", "$ "], ["t-c", 'amonca new --problem "gym ops in spreadsheets"'], ["nl", ""],
        ["t-d", "↳ schema designed · API typed · tenants isolated"], ["nl", ""],
        ["t-d", "↳ Stripe wired · dashboard shipped · deployed"], ["nl", ""],
        ["t-ok", "✓ problem retired"], ["t-d", " — GymAPI live · p95 38ms"], ["nl", ""], ["nl", ""],
      ],
      [
        ["t-p", "$ "], ["t-c", "tail -f production.log"], ["nl", ""],
        ["t-d", "02:14:07 "], ["t-c", "POST /v1/scan "], ["t-ok", "201"], ["t-d", " 44ms · flip-iq"], ["nl", ""],
        ["t-d", "02:14:09 "], ["t-c", "POST /v1/checkins "], ["t-ok", "201"], ["t-d", " 19ms · gymapi"], ["nl", ""],
        ["t-d", "02:14:12 "], ["t-c", "GET  /v1/budgets "], ["t-ok", "200"], ["t-d", " 12ms · fin-family"], ["nl", ""], ["nl", ""],
      ],
    ];
    const cursor = document.createElement("span");
    cursor.className = "term__cursor";
    function pin() {
      body!.scrollTop = body!.scrollHeight;
    }
    let scene = 0;
    function typeScene(idx: number, done: () => void) {
      const tokens = scenes[idx];
      let t = 0;
      function next() {
        if (cancelled) return;
        if (t >= tokens.length) {
          done();
          return;
        }
        const tok = tokens[t++];
        if (tok[0] === "nl") {
          body!.insertBefore(document.createElement("br"), cursor);
          pin();
          wait(next, 90);
          return;
        }
        const span = document.createElement("span");
        span.className = "term__line " + tok[0];
        body!.insertBefore(span, cursor);
        const text = tok[1];
        let i = 0;
        if (reduced) {
          span.textContent = text;
          pin();
          wait(next, 10);
          return;
        }
        (function tick() {
          if (cancelled) return;
          span.textContent = text.slice(0, ++i);
          pin();
          if (i < text.length) wait(tick, text.length > 30 ? 8 : 18);
          else wait(next, 60);
        })();
      }
      next();
    }
    function loop() {
      if (cancelled) return;
      if (scene >= scenes.length) {
        wait(() => {
          while (body!.firstChild !== cursor) body!.removeChild(body!.firstChild!);
          scene = 0;
          loop();
        }, 5200);
        return;
      }
      typeScene(scene++, () => wait(loop, 900));
    }
    body.appendChild(cursor);
    loop();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      while (body.firstChild) body.removeChild(body.firstChild);
    };
  }, []);

  // ── fx: progress, cursor, magnetic, tilt ──
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let raf1: number | null = null;

    const prog = document.getElementById("prog");
    function onScroll() {
      if (!prog) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.transform = "scaleX(" + (max > 0 ? (h.scrollTop || document.body.scrollTop || 0) / max : 0) + ")";
    }
    addEventListener("scroll", onScroll, { passive: true, signal });
    onScroll();

    const fine = matchMedia("(pointer: fine)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return () => controller.abort();

    const root = document.documentElement;
    function calm() {
      return document.body.getAttribute("data-motion") === "calm";
    }
    function sync() {
      root.classList.toggle("fx", !calm());
    }
    const mo = new MutationObserver(sync);
    mo.observe(document.body, { attributes: true, attributeFilter: ["data-motion"] });
    sync();

    const cur = document.getElementById("cur");
    const dot = cur?.querySelector(".cur__dot") as HTMLElement | null;
    const ring = cur?.querySelector(".cur__ring") as HTMLElement | null;
    const tag = cur?.querySelector(".cur__tag") as HTMLElement | null;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, shown = false;
    addEventListener(
      "mousemove",
      (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        if (dot) {
          dot.style.left = mx + "px";
          dot.style.top = my + "px";
        }
        if (!shown && cur) {
          shown = true;
          (cur as HTMLElement).style.opacity = "1";
          rx = mx;
          ry = my;
        }
      },
      { passive: true, signal }
    );
    document.addEventListener(
      "mouseleave",
      () => {
        if (cur) (cur as HTMLElement).style.opacity = "0";
        shown = false;
      },
      { signal }
    );
    (function raf() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      if (tag) {
        tag.style.left = rx + "px";
        tag.style.top = ry + "px";
      }
      raf1 = requestAnimationFrame(raf);
    })();
    document.addEventListener(
      "mouseover",
      (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest) return;
        const card = target.closest("a.card");
        const link = target.closest("a, button, label, input, textarea, .tw__sw, .tw__opt");
        root.setAttribute("data-cur", card ? "view" : link ? "link" : "");
      },
      { signal }
    );

    document.querySelectorAll<HTMLElement>(".btn-primary, .nav__cta").forEach((b) => {
      b.addEventListener(
        "mousemove",
        (e: MouseEvent) => {
          if (calm()) return;
          const r = b.getBoundingClientRect();
          b.style.transform =
            "translate(" +
            (((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)) +
            "px," +
            (((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1)) +
            "px)";
        },
        { signal }
      );
      b.addEventListener("mouseleave", () => (b.style.transform = ""), { signal });
    });

    document.querySelectorAll<HTMLElement>(".wgrid .card, .feat").forEach((c) => {
      c.addEventListener(
        "pointermove",
        (e: PointerEvent) => {
          if (calm()) return;
          const r = c.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform =
            "perspective(1100px) rotateX(" + ((-py * 3.5).toFixed(2)) + "deg) rotateY(" + ((px * 4.5).toFixed(2)) + "deg) translateY(-4px)";
        },
        { signal }
      );
      c.addEventListener("pointerleave", () => (c.style.transform = ""), { signal });
    });

    return () => {
      controller.abort();
      mo.disconnect();
      if (raf1 !== null) cancelAnimationFrame(raf1);
    };
  }, []);

  // ── brief form → mailto ──
  useEffect(() => {
    const controller = new AbortController();
    const f = document.getElementById("briefForm") as HTMLFormElement | null;
    if (!f) return;
    f.addEventListener(
      "submit",
      (e: SubmitEvent) => {
        e.preventDefault();
        if (!f.checkValidity()) {
          f.reportValidity();
          return;
        }
        const d = new FormData(f);
        const subject = "Project brief — " + d.get("name");
        const body =
          "Problem:" + String.fromCharCode(10) + d.get("problem") + String.fromCharCode(10, 10) + "— " + d.get("name") + " · " + d.get("email");
        location.href = "mailto:hello@amonca.dev?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      },
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);

  // ── mobile: thumb bar + carousel counter ──
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const observers: { disconnect(): void }[] = [];

    const bar = document.getElementById("mbar");
    const hero = document.querySelector(".hero");
    const contact = document.getElementById("contact");
    if (bar && hero) {
      let past = false, atC = false;
      const apply = () => bar.classList.toggle("on", past && !atC);
      const io1 = new IntersectionObserver((en) => {
        past = !en[0].isIntersecting;
        apply();
      }, { threshold: 0.04 });
      io1.observe(hero);
      observers.push(io1);
      if (contact) {
        const io2 = new IntersectionObserver((en) => {
          atC = en[0].isIntersecting;
          apply();
        }, { threshold: 0.1 });
        io2.observe(contact);
        observers.push(io2);
      }
    }
    const g = document.querySelector(".wgrid") as HTMLElement | null;
    const out = document.getElementById("wcount");
    if (g && out) {
      const n = g.children.length;
      const pad = (x: number) => (x < 10 ? "0" : "") + x;
      const upd = () => {
        const max = g.scrollWidth - g.clientWidth;
        const i = max > 40 ? Math.round((g.scrollLeft / max) * (n - 1)) : 0;
        out.textContent = pad(i + 1) + " / " + pad(n);
      };
      g.addEventListener("scroll", upd, { passive: true, signal });
      addEventListener("resize", upd, { passive: true, signal });
      upd();
    }

    return () => {
      controller.abort();
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  // ── mobile juice: jelly scroll + carousel physics ──
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const controller = new AbortController();
    const { signal } = controller;
    let cancelled = false;
    let raf1: number | null = null;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const root = document.documentElement;
    function calm() {
      return document.body.getAttribute("data-motion") === "calm";
    }

    let y = scrollY || 0, v = 0, s = 0, sv = 0, lastMove = 0;
    function loop() {
      if (cancelled) return;
      const ny = scrollY || 0, dy = ny - y;
      y = ny;
      v += (dy - v) * 0.32;
      const target = Math.max(-16, Math.min(16, v)) / 16;
      sv += (target - s) * 0.16;
      sv *= 0.8;
      s += sv;
      root.style.setProperty("--jy", calm() ? "0" : s.toFixed(4));
      if (Math.abs(s) < 0.002 && Math.abs(sv) < 0.002 && performance.now() - lastMove > 140) {
        raf1 = null;
        v = 0;
        root.style.setProperty("--jy", "0");
        return;
      }
      raf1 = requestAnimationFrame(loop);
    }
    addEventListener(
      "scroll",
      () => {
        lastMove = performance.now();
        if (raf1 === null) {
          y = scrollY || 0;
          raf1 = requestAnimationFrame(loop);
        }
      },
      { passive: true, signal }
    );

    const g = document.querySelector(".wgrid") as HTMLElement | null;
    if (!g) return () => { cancelled = true; controller.abort(); if (raf1 !== null) cancelAnimationFrame(raf1); };
    const cards = Array.prototype.slice.call(g.querySelectorAll(":scope > .card")) as (HTMLElement & { __cd?: number })[];
    let lastL = 0, bumpAt = 0;
    function cfx() {
      if (calm() || !matchMedia("(max-width: 860px)").matches) return;
      const mid = g!.scrollLeft + g!.clientWidth / 2;
      cards.forEach((c) => {
        const d = (c.offsetLeft + c.offsetWidth / 2 - mid) / g!.clientWidth;
        if (c.__cd != null && Math.abs(c.__cd - d) < 0.004) return;
        c.__cd = d;
        let rot = d * 2.4;
        if (Math.abs(rot) < 0.07) rot = 0;
        c.style.setProperty("--rot", rot.toFixed(2) + "deg");
        c.style.setProperty("--sc", (1 - Math.min(Math.abs(d) * 0.08, 0.06)).toFixed(3));
        const comp = c.querySelector(".comp") as HTMLElement | null;
        if (comp) comp.style.setProperty("--px", (d * -24).toFixed(1) + "px");
      });
      const max = g!.scrollWidth - g!.clientWidth;
      const vL = g!.scrollLeft - lastL;
      lastL = g!.scrollLeft;
      const now = performance.now();
      if (now - bumpAt > 700 && ((g!.scrollLeft <= 1 && vL < -5) || (g!.scrollLeft >= max - 1 && vL > 5))) {
        bumpAt = now;
        g!.style.setProperty("--bo", g!.scrollLeft <= 1 ? "0%" : "100%");
        g!.classList.remove("bump");
        void g!.offsetWidth;
        g!.classList.add("bump");
        const id = setTimeout(() => {
          if (!cancelled) g!.classList.remove("bump");
        }, 600);
        timeouts.push(id);
      }
    }
    g.addEventListener("scroll", cfx, { passive: true, signal });
    cfx();

    return () => {
      cancelled = true;
      controller.abort();
      if (raf1 !== null) cancelAnimationFrame(raf1);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // ── showcase: decode titles, gyro parallax, haptics, reactive ticker ──
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    function calm() {
      return document.body.getAttribute("data-motion") === "calm";
    }

    try {
      const con = (navigator as any).connection;
      if (con && (con.saveData || /(^|\b)2g/.test(con.effectiveType || ""))) document.body.setAttribute("data-motion", "calm");
    } catch {}

    if (reduced) return;

    const controller = new AbortController();
    const { signal } = controller;
    const observers: { disconnect(): void }[] = [];
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const rafs: number[] = [];

    const GLYPHS = "#/<>[]{}=+*^?_";
    document.querySelectorAll<HTMLElement>(".sec__title").forEach((t) => {
      if (t.children.length) return;
      const orig = t.textContent || "";
      let done = false;
      const io = new IntersectionObserver(
        (en, obs) => {
          if (!en[0].isIntersecting || done) return;
          done = true;
          obs.disconnect();
          if (calm()) return;
          const start = performance.now(), DUR = 720;
          (function tick() {
            if (cancelled) return;
            const p = Math.min(1, (performance.now() - start) / DUR);
            const settled = Math.floor(p * orig.length);
            let out = orig.slice(0, settled);
            for (let i = settled; i < orig.length; i++) {
              out += orig[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
            }
            t.textContent = out;
            if (p < 1) rafs.push(requestAnimationFrame(tick));
            else t.textContent = orig;
          })();
        },
        { threshold: 0.4 }
      );
      io.observe(t);
      observers.push(io);
    });

    if (!matchMedia("(pointer: coarse)").matches) {
      return () => {
        cancelled = true;
        controller.abort();
        observers.forEach((o) => o.disconnect());
        rafs.forEach(cancelAnimationFrame);
        timeouts.forEach(clearTimeout);
      };
    }

    let gx = 0, gy = 0, tx = 0, ty = 0, bX: number | null = null, bY: number | null = null, graf: number | null = null;
    function gloop() {
      if (cancelled) return;
      gx += (tx - gx) * 0.09;
      gy += (ty - gy) * 0.09;
      if (calm()) {
        gx = 0; gy = 0; tx = 0; ty = 0;
      }
      root.style.setProperty("--gx", gx.toFixed(2) + "px");
      root.style.setProperty("--gy", gy.toFixed(2) + "px");
      if (Math.abs(gx - tx) < 0.05 && Math.abs(gy - ty) < 0.05) {
        graf = null;
        return;
      }
      graf = requestAnimationFrame(gloop);
    }
    function onOri(e: DeviceOrientationEvent) {
      if (e.gamma == null || e.beta == null) return;
      if (bX === null) {
        bX = e.gamma;
        bY = e.beta;
      }
      bX! += (e.gamma - bX!) * 0.006;
      bY! += (e.beta - bY!) * 0.006;
      tx = Math.max(-1, Math.min(1, (e.gamma - bX!) / 22)) * 15;
      ty = Math.max(-1, Math.min(1, (e.beta - bY!) / 22)) * 11;
      if (graf === null) graf = requestAnimationFrame(gloop);
    }
    function armGyro() {
      addEventListener("deviceorientation", onOri, { passive: true, signal });
    }
    const DOE = (window as any).DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === "function") {
      const chip = document.getElementById("motionChip");
      if (chip) {
        chip.classList.add("show");
        rafs.push(requestAnimationFrame(() => chip.classList.add("vis")));
        const hideT = setTimeout(() => chip.classList.remove("vis"), 12000);
        timeouts.push(hideT);
        chip.addEventListener(
          "click",
          () => {
            clearTimeout(hideT);
            chip.classList.remove("vis");
            const id = setTimeout(() => chip.classList.remove("show"), 400);
            timeouts.push(id);
            DOE.requestPermission()
              .then((st: string) => {
                if (st === "granted") armGyro();
              })
              .catch(() => {});
          },
          { signal }
        );
      }
    } else if ("ondeviceorientation" in window) {
      armGyro();
    }

    const g = document.querySelector(".wgrid") as HTMLElement | null;
    if (g && navigator.vibrate) {
      let lastIdx = 0;
      g.addEventListener(
        "scroll",
        () => {
          const max = g.scrollWidth - g.clientWidth;
          if (max <= 0) return;
          const i = Math.round((g.scrollLeft / max) * (g.children.length - 1));
          if (i !== lastIdx) {
            lastIdx = i;
            if (!calm()) navigator.vibrate(4);
          }
        },
        { passive: true, signal }
      );
    }

    const lane = document.getElementById("tickerLane");
    if (lane) {
      let anim: any = null, lastX: number | null = null, settle: ReturnType<typeof setTimeout> | null = null;
      function laneAnim() {
        if (!anim && (lane as any).getAnimations) anim = (lane as any).getAnimations()[0] || null;
        return anim;
      }
      addEventListener(
        "scroll",
        () => {
          if (calm()) return;
          const a = laneAnim();
          if (!a) return;
          const x = scrollY || 0;
          if (lastX !== null) {
            const vel = Math.min(Math.abs(x - lastX), 60);
            const rate = Math.min(6, 1 + vel / 9);
            try {
              a.updatePlaybackRate ? a.updatePlaybackRate(rate) : (a.playbackRate = rate);
            } catch {
              a.playbackRate = rate;
            }
          }
          lastX = x;
          if (settle) clearTimeout(settle);
          settle = setTimeout(() => {
            try {
              a.updatePlaybackRate ? a.updatePlaybackRate(1) : (a.playbackRate = 1);
            } catch {
              a.playbackRate = 1;
            }
            lastX = null;
          }, 300);
          timeouts.push(settle);
        },
        { passive: true, signal }
      );
    }

    return () => {
      cancelled = true;
      controller.abort();
      observers.forEach((o) => o.disconnect());
      rafs.forEach(cancelAnimationFrame);
      if (graf !== null) cancelAnimationFrame(graf);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // ── big sections: marquee reactive playback, nav inversion over dark CTA ──
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const lane = document.getElementById("bigmqLane");
    if (lane && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let anim: any = null, lastX: number | null = null, settle: ReturnType<typeof setTimeout> | null = null;
      addEventListener(
        "scroll",
        () => {
          if (document.body.getAttribute("data-motion") === "calm") return;
          if (!anim && (lane as any).getAnimations) anim = (lane as any).getAnimations()[0] || null;
          if (!anim) return;
          const x = scrollY || 0;
          if (lastX !== null) {
            const rate = Math.min(5, 1 + Math.min(Math.abs(x - lastX), 60) / 10);
            try {
              anim.updatePlaybackRate ? anim.updatePlaybackRate(rate) : (anim.playbackRate = rate);
            } catch {
              anim.playbackRate = rate;
            }
          }
          lastX = x;
          if (settle) clearTimeout(settle);
          settle = setTimeout(() => {
            try {
              anim.updatePlaybackRate ? anim.updatePlaybackRate(1) : (anim.playbackRate = 1);
            } catch {
              anim.playbackRate = 1;
            }
            lastX = null;
          }, 300);
          timeouts.push(settle);
        },
        { passive: true, signal }
      );
    }

    const nav = document.querySelector(".nav") as HTMLElement | null;
    const cta = document.getElementById("contact");
    if (nav && cta) {
      let invOn = false;
      const checkInv = () => {
        const r = cta.getBoundingClientRect();
        const hit = r.top <= 68 && r.bottom >= 68;
        if (hit !== invOn) {
          invOn = hit;
          nav.classList.toggle("nav--inv", hit);
        }
      };
      addEventListener("scroll", checkInv, { passive: true, signal });
      addEventListener("resize", checkInv, { passive: true, signal });
      checkInv();
    }

    return () => {
      controller.abort();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // ── visible wow: ambient zones, scan reveals ──
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const observers: { disconnect(): void }[] = [];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const zones = ([["work", "#eae9e3"], ["hood", "#e3e6ec"], ["studio", "#e7eae2"], ["process", "#e8e8eb"]] as [string, string][])
      .map(([id, color]) => [document.getElementById(id), color] as const)
      .filter((z): z is [HTMLElement, string] => !!z[0]);
    if (zones.length) {
      document.body.style.transition = "background-color 0.9s ease";
      const zTick = () => {
        const mid = innerHeight * 0.55;
        let c = "";
        for (let i = 0; i < zones.length; i++) {
          const r = zones[i][0].getBoundingClientRect();
          if (r.top <= mid && r.bottom >= mid) {
            c = zones[i][1];
            break;
          }
        }
        document.body.style.backgroundColor = c;
      };
      addEventListener("scroll", zTick, { passive: true, signal });
      zTick();
    }

    if (reduced) return () => controller.abort();

    const scanEls = Array.prototype.slice.call(document.querySelectorAll(".card__stage, .feat__stage")) as HTMLElement[];
    scanEls.forEach((el) => el.classList.add("scan-pending"));
    const sio = new IntersectionObserver(
      (ens) => {
        ens.forEach((en) => {
          if (!en.isIntersecting) return;
          sio.unobserve(en.target);
          en.target.classList.remove("scan-pending");
          en.target.classList.add("scan-go");
        });
      },
      { threshold: 0.25 }
    );
    scanEls.forEach((el) => sio.observe(el));
    observers.push(sio);

    return () => {
      controller.abort();
      observers.forEach((o) => o.disconnect());
    };
  }, []);


  // ── orbital ring: yaw the phone trio a few degrees with the cursor ──
  useEffect(() => {
    const duo = document.querySelector(".duo") as HTMLElement | null;
    if (!duo) return;
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const controller = new AbortController();
    let raf: number | null = null;
    let t = 0, c = 0; // target / current yaw in [-1, 1]

    const loop = () => {
      raf = null;
      c += (t - c) * 0.07;
      duo.style.setProperty("--ring", (c * 6).toFixed(2) + "deg");
      duo.style.setProperty("--rz", (c * 30).toFixed(1) + "px");
      duo.style.setProperty("--rx", (c * 14).toFixed(1) + "px");
      if (Math.abs(t - c) > 0.003) raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", (e: PointerEvent) => {
      t = document.body.getAttribute("data-motion") === "calm" ? 0 : (e.clientX / innerWidth) * 2 - 1;
      if (raf === null) raf = requestAnimationFrame(loop);
    }, { passive: true, signal: controller.signal });

    return () => {
      controller.abort();
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}