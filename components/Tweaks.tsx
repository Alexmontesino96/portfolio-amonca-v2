// Tweaks panel
export default function Tweaks() {
  return (
  <div id="tw" className="tw" hidden aria-label="Tweaks">
    <div className="tw__head">
      <span className="tw__title">Tweaks</span>
      <button className="tw__x" id="twX" aria-label="Close">✕</button>
    </div>
    <span className="tw__label">Accent</span>
    <div className="tw__row" role="group" aria-label="Accent color">
      <button className="tw__sw" data-ac="#0f1115" style={{background:'#0f1115'}} aria-label="Ink"></button>
      <button className="tw__sw" data-ac="#c9f042" style={{background:'#c9f042'}} aria-label="Signal green"></button>
      <button className="tw__sw" data-ac="#a371f7" style={{background:'#a371f7'}} aria-label="Violet"></button>
      <button className="tw__sw" data-ac="#ffb224" style={{background:'#ffb224'}} aria-label="Amber"></button>
    </div>
    <span className="tw__label">Motion</span>
    <div className="tw__seg" role="group" aria-label="Motion">
      <button className="tw__opt" data-mo="full">Full</button>
      <button className="tw__opt" data-mo="calm">Calm</button>
    </div>
  </div>
  );
}
