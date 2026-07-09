export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top">
          <img src="/assets/brand/amonca-mark-dark.svg" alt="" />
          <b>AMONCA</b>
        </a>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#hood">Engineering</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#studio">Studio</a>
        </div>
        <span className="nav__status"><i></i>6 products in production</span>
        <a className="nav__cta" href="#contact">Start a project</a>
      </div>
    </nav>
  );
}
