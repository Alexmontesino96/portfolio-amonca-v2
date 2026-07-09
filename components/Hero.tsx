import ArrowIcon from "./ArrowIcon";

const STACK = [
  "Python", "FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Swift",
  "Redis", "Docker", "AWS", "Stripe", "LLM pipelines", "CI/CD",
];

export default function Hero() {
  return (
    <header className="hero" id="top" data-screen-label="Hero">
      <div className="wrap hero__grid">
        <div>
          <span className="hero__eyebrow st st1">Problem-first software studio</span>
          <h1 className="hero__title st st2"><span className="wm wm--1"><i>Problems</i></span> <span className="wm wm--2"><i>in.</i></span><br /><span className="wm wm--3"><i><em>Production</em></i></span> <span className="wm wm--4"><i>out.</i></span></h1>
          <p className="hero__sub st st3">Every AMONCA product started as a real operating problem — sourcing too slow, billing scattered, lists nobody could read. We design, build and operate the software that retires it: APIs, SaaS and apps running in production today.</p>
          <div className="hero__actions st st4">
            <a className="btn-primary" href="#work">
              See the work
              <ArrowIcon />
            </a>
            <a className="btn-ghost" href="#hood">How we engineer →</a>
          </div>
        </div>
        <div className="st st5">
          <div className="term" data-om-raster="">
            <div className="term__bar">
              <span className="term__dot"></span><span className="term__dot"></span><span className="term__dot"></span>
              <span className="term__title">amonca — production · live</span>
            </div>
            <div className="term__body" id="termBody"><span className="term__cursor"></span></div>
          </div>
        </div>
      </div>

      {/* stack ticker */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__lane" id="tickerLane">
          {[...STACK, ...STACK].map((item, i) => (
            <span className="ticker__item" key={i}>{item}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
