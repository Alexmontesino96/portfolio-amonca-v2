import type { CSSProperties } from "react";

// ═══════════ UNDER THE HOOD ═══════════
export default function Hood() {
  return (
  <section className="sec" id="hood" data-screen-label="Engineering">
    <i className="wash wash--hood" aria-hidden="true"></i>
    <div className="wrap hood">
      <div className="hood__sticky rv">
        <span className="eyebrow">Under the hood</span>
        <h2 className="sec__title">The pretty part is the shallow end.</h2>
        <p className="hood__lead">Every AMONCA product sits on the same engineering discipline: typed APIs, boring-on-purpose infrastructure, and observability from day one. The interface is what clients see — this is what keeps it standing.</p>
      </div>
      <div>
        <div className="pipe rv">
          <div className="pipe__row" style={{ '--w': '52%' } as CSSProperties}><span className="pipe__stage">Edge</span><span className="pipe__what"><b>Auth &amp; rate limiting</b> — JWT / API keys, per-tenant quotas</span><span className="pipe__ms">~2ms</span><i className="pipe__bar"></i></div>
          <div className="pipe__row" style={{ '--w': '78%' } as CSSProperties}><span className="pipe__stage">API</span><span className="pipe__what"><b>Typed FastAPI services</b> — validated I/O, versioned contracts, OpenAPI docs</span><span className="pipe__ms">~18ms</span><i className="pipe__bar"></i></div>
          <div className="pipe__row" style={{ '--w': '40%' } as CSSProperties}><span className="pipe__stage">Queue</span><span className="pipe__what"><b>Background workers</b> — billing, notifications, ML jobs off the hot path</span><span className="pipe__ms">async</span><i className="pipe__bar"></i></div>
          <div className="pipe__row" style={{ '--w': '64%' } as CSSProperties}><span className="pipe__stage">Data</span><span className="pipe__what"><b>PostgreSQL + Redis</b> — migrations, backups, tenant isolation</span><span className="pipe__ms">~6ms</span><i className="pipe__bar"></i></div>
          <div className="pipe__row" style={{ '--w': '88%' } as CSSProperties}><span className="pipe__stage">Ops</span><span className="pipe__what"><b>Docker · CI/CD · AWS</b> — deployed, observed, alerted before you notice</span><span className="pipe__ms">24/7</span><i className="pipe__bar"></i></div>
        </div>
        <div className="hood__stats rv">
          <div className="stat"><b>9</b><span>products shipped</span></div>
          <div className="stat"><b>6</b><span>live in production</span></div>
          <div className="stat"><b>1</b><span>team, end to end</span></div>
        </div>
      </div>
    </div>

    {/* ═══════════ CAPABILITIES ═══════════ */}
    <div className="wrap caps" id="capabilities" data-screen-label="Capabilities">
      <div className="sec" style={{paddingBottom:'0'}}>
        <div className="sec__head rv">
          <div>
            <span className="eyebrow">Capabilities</span>
            <h2 className="sec__title">What we solve with</h2>
          </div>
        </div>
        <div className="rv">
          <div className="cap"><span className="cap__num">01</span><span className="cap__name">Backend &amp; APIs</span><span className="cap__desc">Production FastAPI &amp; Django services — auth, payments, realtime, queues and the scale to back them.</span><span className="cap__tag">Python · FastAPI</span></div>
          <div className="cap"><span className="cap__num">02</span><span className="cap__name">SaaS platforms</span><span className="cap__desc">Multi-tenant web apps from data model to dashboard, billing and admin — end to end.</span><span className="cap__tag">Next.js · TS</span></div>
          <div className="cap"><span className="cap__num">03</span><span className="cap__name">Mobile apps</span><span className="cap__desc">Native iOS and cross-platform apps wired directly to your API and auth.</span><span className="cap__tag">Swift · RN</span></div>
          <div className="cap"><span className="cap__num">04</span><span className="cap__name">AI &amp; automation</span><span className="cap__desc">LLM features, CV/ML pipelines, bots and background workers that earn their keep.</span><span className="cap__tag">LLM · CV</span></div>
          <div className="cap"><span className="cap__num">05</span><span className="cap__name">DevOps</span><span className="cap__desc">Dockerized deploys, CI/CD and AWS — shipped, observed and kept running.</span><span className="cap__tag">Docker · AWS</span></div>
        </div>
      </div>
    </div>
  </section>
  );
}
