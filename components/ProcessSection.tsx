// ═══════════ CTA ═══════════
// ═══════════ PROCESS ═══════════
export default function ProcessSection() {
  return (
  <section className="sec" id="process" data-screen-label="Process">
    <i className="wash wash--process" aria-hidden="true"></i>
    <div className="wrap">
      <div className="sec__head rv">
        <div>
          <span className="eyebrow">How we work</span>
          <h2 className="sec__title">Three steps. Zero hand-offs.</h2>
        </div>
      </div>
      <div className="steps rv">
        <div className="step"><span className="step__n">01</span><b>Intro call</b><p>Thirty minutes on the problem — what it costs you today, honest feasibility, and whether we're the right fit.</p></div>
        <div className="step"><span className="step__n">02</span><b>Fixed-scope build</b><p>Design, API and app under one roof, with a working demo in your inbox every week.</p></div>
        <div className="step"><span className="step__n">03</span><b>Operate</b><p>Deployed, monitored and alerted from day one — the same infrastructure our own products run on.</p></div>
      </div>
    </div>
  </section>
  );
}
