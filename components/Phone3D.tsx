"use client";

import { useEffect, useRef } from "react";

/** Procedural, photoreal-leaning iPhone rendered with three.js — titanium PBR
 *  body, the real Classes screenshot as the screen texture, dynamic island and
 *  side buttons. Follows the cursor with lerped 3D rotation and floats idly;
 *  static under prefers-reduced-motion, returns to rest in calm mode, falls
 *  back to the flat screenshot if WebGL is unavailable. */
export default function Phone3D() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let teardown: (() => void) | null = null;

    (async () => {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const host = hostRef.current;
      if (disposed || !host) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        const img = document.createElement("img");
        img.src = "/assets/products/apps/gym-clases.png";
        img.alt = "";
        img.className = "phone3d__flat";
        host.appendChild(img);
        return;
      }
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = envTex;

      const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 60);
      camera.position.set(0, 0, 10.9);

      const key = new THREE.DirectionalLight(0xffffff, 1.1);
      key.position.set(3.5, 4.5, 6);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xdfe8f5, 0.5);
      rim.position.set(-4, -1.5, -3);
      scene.add(rim);

      const phone = new THREE.Group();
      scene.add(phone);

      const disposables: { dispose(): void }[] = [envTex];
      const track = <T extends { dispose(): void }>(d: T): T => (disposables.push(d), d);

      const roundedRect = (w: number, h: number, r: number) => {
        const s = new THREE.Shape();
        const x = -w / 2, y = -h / 2;
        s.moveTo(x + r, y);
        s.lineTo(x + w - r, y);
        s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
        s.lineTo(x + w, y + h - r);
        s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
        s.lineTo(x + r, y + h);
        s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
        s.lineTo(x, y + r);
        s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
        return s;
      };

      // dimensions — screen keeps the real screenshot's aspect (1206×2622)
      const SCREEN_H = 4.1;
      const SCREEN_W = SCREEN_H * (1206 / 2622);
      const GLASS_W = SCREEN_W + 0.12, GLASS_H = SCREEN_H + 0.12;
      const BODY_W = GLASS_W + 0.09, BODY_H = GLASS_H + 0.09;
      const DEPTH = 0.15, BEVEL = 0.05;

      // titanium body — extruded rounded rect with a soft beveled rail
      const bodyGeo = track(new THREE.ExtrudeGeometry(roundedRect(BODY_W, BODY_H, 0.4), {
        depth: DEPTH, bevelEnabled: true, bevelThickness: BEVEL, bevelSize: 0.045, bevelSegments: 5, curveSegments: 24,
      }));
      bodyGeo.center();
      const bodyMat = track(new THREE.MeshPhysicalMaterial({
        color: 0x9a9ea4, metalness: 1, roughness: 0.34, clearcoat: 0.55, clearcoatRoughness: 0.28, envMapIntensity: 1.25,
      }));
      phone.add(new THREE.Mesh(bodyGeo, bodyMat));

      // front glass
      const glassGeo = track(new THREE.ShapeGeometry(roundedRect(GLASS_W, GLASS_H, 0.36), 24));
      const glassMat = track(new THREE.MeshPhysicalMaterial({
        color: 0x060608, metalness: 0.2, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.9,
      }));
      const glass = new THREE.Mesh(glassGeo, glassMat);
      glass.position.z = DEPTH / 2 + BEVEL + 0.004;
      phone.add(glass);

      // screen — real screenshot, UVs remapped onto the rounded shape
      const screenGeo = track(new THREE.ShapeGeometry(roundedRect(SCREEN_W, SCREEN_H, 0.3), 24));
      {
        const uv = screenGeo.attributes.uv as import("three").BufferAttribute;
        const pos = screenGeo.attributes.position as import("three").BufferAttribute;
        for (let i = 0; i < uv.count; i++) {
          uv.setXY(i, (pos.getX(i) + SCREEN_W / 2) / SCREEN_W, (pos.getY(i) + SCREEN_H / 2) / SCREEN_H);
        }
        uv.needsUpdate = true;
      }
      const tex = track(new THREE.TextureLoader().load("/assets/products/apps/gym-clases.png", () => renderOnce()));
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      const screenMat = track(new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.z = glass.position.z + 0.003;
      phone.add(screen);

      // dynamic island
      const islandGeo = track(new THREE.ShapeGeometry(roundedRect(0.58, 0.17, 0.085), 16));
      const islandMat = track(new THREE.MeshBasicMaterial({ color: 0x050507, toneMapped: false }));
      const island = new THREE.Mesh(islandGeo, islandMat);
      island.position.set(0, SCREEN_H / 2 - 0.26, screen.position.z + 0.002);
      phone.add(island);

      // side buttons
      const mkBtn = (len: number, x: number, y: number) => {
        const g = track(new THREE.BoxGeometry(0.045, len, 0.09));
        const m = new THREE.Mesh(g, bodyMat);
        m.position.set(x, y, 0);
        phone.add(m);
      };
      const railX = BODY_W / 2 + 0.012;
      mkBtn(0.22, -railX, BODY_H / 2 - 1.02);           // action
      mkBtn(0.34, -railX, BODY_H / 2 - 1.46);           // vol +
      mkBtn(0.34, -railX, BODY_H / 2 - 1.92);           // vol −
      mkBtn(0.52, railX, BODY_H / 2 - 1.55);            // power

      // sizing
      const fit = () => {
        const w = host.clientWidth || 1, h = host.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      fit();
      const ro = new ResizeObserver(() => { fit(); renderOnce(); });
      ro.observe(host);

      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = matchMedia("(pointer: fine)").matches;
      const calm = () => document.body.getAttribute("data-motion") === "calm";

      const BASE_RX = -0.02;
      let tRX = BASE_RX, tRY = 0, rx = BASE_RX, ry = 0;
      let lastPointer = 0;
      let raf: number | null = null;
      let visible = true;
      let kick = 0; // tap impulse on touch devices (no cursor there)

      function renderOnce() {
        if (!disposed) renderer.render(scene, camera);
      }

      const onPointer = (e: PointerEvent) => {
        lastPointer = performance.now();
        const nx = (e.clientX / innerWidth) * 2 - 1;
        const ny = (e.clientY / innerHeight) * 2 - 1;
        tRY = nx * 0.42;
        tRX = BASE_RX + ny * 0.15;
        wake();
      };

      const loop = (t: number) => {
        raf = null;
        if (disposed || !visible) return;
        const now = performance.now();
        let targetRX = tRX, targetRY = tRY, floatY = Math.sin(t * 0.0009) * 0.05;
        if (calm()) { targetRX = BASE_RX; targetRY = 0; floatY = 0; }
        else if (now - lastPointer > 2600) {
          targetRY = Math.sin(t * 0.00045) * 0.17;
          targetRX = BASE_RX + Math.sin(t * 0.0003 + 1.3) * 0.05;
        }
        if (!calm()) {
          // device tilt (the site's gyro writes --gx/--gy after "Enable tilt")
          const rs = document.documentElement.style;
          const gx = parseFloat(rs.getPropertyValue("--gx")) || 0;
          const gy = parseFloat(rs.getPropertyValue("--gy")) || 0;
          if (gx || gy) { targetRY += (gx / 15) * 0.3; targetRX += (gy / 11) * 0.12; }
          // tap impulse decays into a springy settle
          kick *= 0.93;
          targetRY += kick;
        }
        rx += (targetRX - rx) * 0.07;
        ry += (targetRY - ry) * 0.07;
        phone.rotation.x = rx;
        phone.rotation.y = ry;
        phone.position.y = floatY;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };
      const wake = () => { if (raf === null && visible && !reduced) raf = requestAnimationFrame(loop); };

      const io = new IntersectionObserver((en) => {
        visible = en[0].isIntersecting;
        if (visible) wake();
      }, { threshold: 0.05 });
      io.observe(host);

      const onTap = (e: PointerEvent) => {
        const r = host.getBoundingClientRect();
        kick += (e.clientX < r.left + r.width / 2 ? -1 : 1) * 0.55;
        kick = Math.max(-1.1, Math.min(1.1, kick));
        lastPointer = performance.now() - 3000; // let idle resume right after the settle
        wake();
      };

      if (!reduced) {
        if (finePointer) addEventListener("pointermove", onPointer, { passive: true });
        else host.addEventListener("pointerdown", onTap, { passive: true });
        wake();
      } else {
        renderOnce();
      }

      teardown = () => {
        if (raf !== null) cancelAnimationFrame(raf);
        removeEventListener("pointermove", onPointer);
        host.removeEventListener("pointerdown", onTap);
        ro.disconnect();
        io.disconnect();
        disposables.forEach((d) => d.dispose());
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      if (teardown) teardown();
    };
  }, []);

  return <div ref={hostRef} className="phone3d" aria-hidden="true" />;
}
