import ArrowIcon from "./ArrowIcon";

export default function Contact() {
  return (
  <section className="sec cta" id="contact" data-screen-label="Contact">
    <div className="wrap rv">
      <span className="eyebrow" style={{justifyContent:'center'}}>Start a project</span>
      <h2 className="cta__title">Bring us the problem.<br />Take it home <em>running</em>.</h2>
      <div className="brief rv">
        <form className="brief__form" id="briefForm">
          <label className="bf"><span>Name</span><input name="name" type="text" required autoComplete="name" placeholder="Your name" /></label>
          <label className="bf"><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
          <label className="bf bf--full"><span>The problem</span><textarea name="problem" rows={3} required placeholder="What's slow, manual or breaking — and what is it costing you?"></textarea></label>
          <div className="brief__send">
            <button className="btn-primary" type="submit">Send the brief
              <ArrowIcon />
            </button>
            <span className="brief__hint">Opens your mail app — nothing is stored.</span>
          </div>
        </form>
        <aside className="brief__side">
          <p className="brief__note"><b>Straight to the builder.</b> Your brief lands with the person who writes the code — a reply within 24 hours, a 30-minute call, and an honest read on feasibility before any commitment.</p>
          <a className="cta__mail" href="mailto:alexmontesinocastro9@gmail.com">alexmontesinocastro9@gmail.com</a>
          <a className="cta__mail" href="https://github.com/Alexmontesino96" target="_blank" rel="noopener">github.com/Alexmontesino96</a>
        </aside>
      </div>
    </div>
    <footer className="foot">
      <div className="wrap foot__in">
        <div className="foot__brand">
          <img src="/assets/brand/amonca-mark-paper.svg" alt="" />
          <b>AMONCA</b>
        </div>
        <nav className="foot__links">
          <a href="#work">Work</a>
          <a href="#hood">Engineering</a>
          <a href="#studio">Studio</a>
          <a href="https://github.com/Alexmontesino96" target="_blank" rel="noopener">GitHub</a>
        </nav>
        <span className="foot__copy">© 2026 AMONCA Technology Solutions</span>
      </div>
    </footer>
  </section>
  );
}
