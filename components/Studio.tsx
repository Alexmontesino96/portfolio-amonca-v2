// ═══════════ STUDIO / FOUNDER ═══════════
export default function Studio() {
  return (
  <section className="sec" id="studio" data-screen-label="Studio">
    <i className="wash wash--studio" aria-hidden="true"></i>
    <div className="wrap founder">
      <div className="founder__photo rv">
        <img src="/assets/team/founder-ceo.png" alt="Alex Montesino, founder of AMONCA" />
        <span className="founder__tag">Alex Montesino — Founder</span>
      </div>
      <div className="rv">
        <span className="eyebrow">The studio</span>
        <h2 className="sec__title">One roof, zero hand-offs.</h2>
        <p className="founder__para">AMONCA is the studio of <b>Alex Montesino</b> — a backend developer and API specialist who'd rather retire a problem than bill hours, taking products from first schema to production traffic. No agency layers: the person who designs your API is the one answering when it pages.</p>
        <span className="founder__now"><i></i>Currently building Flip IQ · Pulso · D&amp;D Imperium</span>
      </div>
    </div>
  </section>
  );
}
