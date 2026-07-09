import ArrowIcon from "./ArrowIcon";

export default function Chrome() {
  return (
    <>
      <i className="prog" id="prog" aria-hidden="true"></i>
      <div className="cur" id="cur" aria-hidden="true"><span className="cur__dot"></span><span className="cur__ring"></span><span className="cur__tag">VISIT ↗</span></div>
      <a className="mbar" id="mbar" href="#contact"><i></i>Start a project
        <ArrowIcon />
      </a>
      <button className="motion-chip" id="motionChip" type="button"><i></i>Enable tilt</button>
      <div className="atmo"></div>
    </>
  );
}
