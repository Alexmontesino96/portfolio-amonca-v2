import ArrowIcon from "./ArrowIcon";
import Phone3D from "./Phone3D";


// ═══════════ WORK ═══════════
export default function Work() {
  return (
  <section className="sec" id="work" data-screen-label="Work">
    <i className="wash wash--work" aria-hidden="true"></i>
    <div className="wrap">
      <div className="sec__head rv">
        <div>
          <span className="eyebrow">Problems, retired</span>
          <h2 className="sec__title">Built here. Running now.</h2>
        </div>
        <span className="sec__note">09 shipped · 06 in production</span>
      </div>

      <div className="workx">

        {/* flagship spotlight: Pulso — full-bleed, no card */}
        <div className="spotlight rv" id="pulso">
          <i className="wash wash--spot" aria-hidden="true"></i>
          <div className="spot__grid">
            <div className="spot__lede">
              <span className="spot__idx">01</span>
              <span className="spot__pill"><i></i>Flagship SaaS</span>
              <h2 className="spot__title">Pulso</h2>
              <p className="spot__sub">Fitness platform for modern gyms</p>
              <p className="spot__desc">Multi-tenant gym platform — memberships, access control, classes and Stripe billing, with a realtime admin and a native iOS app. Built for scale from day one.</p>
              <span className="spot__eyebrow">Built to power modern gyms</span>
              <div className="spot__feats">
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>Classes</span>
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><path d="M4 9V5.5A1.5 1.5 0 015.5 4H9M15 4h3.5A1.5 1.5 0 0120 5.5V9M20 15v3.5a1.5 1.5 0 01-1.5 1.5H15M9 20H5.5A1.5 1.5 0 014 18.5V15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M8 8h2v2H8zM14 8h2v2h-2zM8 14h2v2H8zM14 14h2v2h-2z" fill="currentColor"/></svg>QR Check-in</span>
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M3 10h18" stroke="currentColor" strokeWidth="1.7"/><path d="M7 14.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>Stripe Payments</span>
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7"/><path d="M3.5 19a5.5 5.5 0 0111 0M16 6.5a3 3 0 010 6M20.5 19a5.5 5.5 0 00-3.5-5.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>Multi-tenant</span>
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5V14a2.5 2.5 0 01-2.5 2.5H9l-4 3.5V6.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>Social Community</span>
                <span className="spot__feat"><svg viewBox="0 0 24 24" fill="none"><rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>Native iOS</span>
              </div>
              <div className="spot__tags"><span>FastAPI</span><span>PostgreSQL</span><span>SwiftUI</span><span>Stripe</span></div>
              <p className="spot__note">From backend architecture to App Store-ready product.</p>
            </div>

            <div className="spot__stage" aria-hidden="true">
              <div className="duo">
                <div className="frag frag--checkin"><div className="frag__in">
                  <span className="frag__ok">✓</span>
                  <div><b>Check-in valid</b><span>Carlos Joan · 10:02 AM</span></div>
                </div></div>
                <Phone3D />
                <div className="frag frag--live"><div className="frag__in">
                  <span className="frag__eye"><i></i>En vivo</span>
                  <span className="frag__num">35<em>entrenando ahora</em></span>
                  <span className="frag__bars"><i></i><i></i><i></i><i></i></span>
                </div></div>
                <div className="frag frag--pay"><div className="frag__in">
                  <div><b>Membresía Pro</b><span>vía Stripe · renovación auto</span></div>
                  <div className="frag__amt"><b>$49.00</b><span>✓ paid</span></div>
                </div></div>
              </div>
            </div>
          </div>

          <div className="spot__trust">
            <span className="spot__trust-label">Trusted by gyms &amp; studios</span>
            <div className="spot__logos">
              <span><b>Everlast</b> Gym</span>
              <span><b>Nüwa</b> Fit</span>
              <span><b>Vulcan</b> Studio</span>
              <span><b>Ironhub</b> Training</span>
              <span><b>Alma</b> Wellness</span>
              <span><b>Forza</b> Club</span>
            </div>
          </div>
        </div>

        <div className="wgrid">
          <a className="card rv" href="https://www.getflipiq.com" target="_blank" rel="noopener">
            <span className="card__idx" aria-hidden="true">02</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wflip" aria-hidden="true"></i>
              <div className="comp comp--flip">
                <div className="fbar"><i></i><span>0 27242 92047 7</span></div>
                <div className="fshot fshot--home fl fl-b"><img src="/assets/products/apps/flipiq-home.png" alt="" /></div>
                <div className="fshot fshot--scan fl fl-c"><img src="/assets/products/apps/flipiq-scan.png" alt="" /></div>
                <div className="fshot fshot--buy fl fl-a"><img src="/assets/products/apps/flipiq-buy.png" alt="" /></div>
                <div className="fpanel fl fl-b"><img src="/assets/products/apps/flipiq-channels.png" alt="" /></div>
                <span className="scap">Scan → analyze → verdict</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>02</i>Flip IQ</span><span className="chip chip--live">Live</span></div>
              <p className="card__desc">Live consumer product: scan a barcode → buy / watch / pass, with AI spelling out the why. Designed, built and shipped end to end.</p>
              <div className="card__meta">
                <div className="card__tags"><span>Next.js</span><span>FastAPI</span><span>AI</span></div>
                <span className="card__url">getflipiq.com</span>
                <span className="card__arrow"><ArrowIcon /></span>
              </div>
            </div>
          </a>

          <div className="card rv">
            <span className="card__idx" aria-hidden="true">03</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wfam" aria-hidden="true"></i>
              <div className="comp comp--fam">
                <div className="tghead">
                  <span className="tgback">‹</span>
                  <span className="tgava">F</span>
                  <span className="tgwho">
                    <b>Financial Family</b>
                    <span className="tgsub">
                      <i className="tgsub-bot">bot</i>
                      <i className="tgsub-typing">escribiendo…</i>
                    </span>
                  </span>
                  <span className="tgmore">⋯</span>
                </div>
                <div className="tgchat">
                  <div className="tgb tgb--out tgs tgs1"><span className="tgcmd">/gasto</span> 42.50 súper<span className="tgtime">21:04 <span className="tgcheck">✓✓</span></span></div>
                  <div className="tgb tgb--in tgs tgs2">
                    Anotado: <b>$42.50</b> en Súper 🛒<br />
                    Julio: quedan <b>$318</b>
                    <span className="tgbar"><em>▰▰▰▰▰▰▱▱▱▱</em> 64%</span>
                    <span className="tgtime">21:04</span>
                  </div>
                  <div className="tgkb tgs tgs3"><span>📊 Resumen</span><span>💰 Presupuesto</span></div>
                </div>
                <span className="scap">Telegram-native</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>03</i>Financial Family</span><span className="chip">Fintech</span></div>
              <p className="card__desc">A Telegram bot that runs the household's money — expenses logged from chat, budgets answered in seconds.</p>
              <div className="card__meta">
                <div className="card__tags"><span>FastAPI</span><span>Telegram Bot API</span></div>
              </div>
            </div>
          </div>

          <div className="card rv">
            <span className="card__idx" aria-hidden="true">04</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wback" aria-hidden="true"></i>
              <div className="comp comp--back">
                <div className="blabel fl fl-b">
                  <span className="blabel__bay">B-07</span>
                  <span className="blabel__sku">B00X4 · CeraVe 19oz</span>
                  <i className="blabel__bars" aria-hidden="true"></i>
                  <span className="blabel__route">Receiving → Backroom</span>
                </div>
                <div className="btrack fl fl-a">
                  <div className="btrack__head"><b>B00X4 · CeraVe 19oz</b><span>BOH 18u</span></div>
                  <div className="btrack__lane">
                    <div className="bstop bstop--in"><i></i><b>Dock</b><span>+24 · 09:12</span></div>
                    <div className="bstop"><i></i><b>Floor</b><span>−6 · 11:40</span></div>
                    <div className="bstop bstop--anom"><i></i><b>No sale</b><span>−12 · 14:03</span></div>
                    <div className="bstop bstop--ok"><i></i><b>Count</b><span>18u ✓ · 17:25</span></div>
                  </div>
                </div>
                <div className="bcheck fl fl-c"><span className="bcheck__dot" aria-hidden="true"></span><div><b>AI flag</b><span>−12 sin venta · bay B-07</span></div></div>
                <span className="scap">Receiving → sales floor</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>04</i>Backroom</span><span className="chip">Inventory SaaS</span></div>
              <p className="card__desc">Inventory control SaaS — UPC-level traceability from receiving to sales floor, with AI flagging the movements that don't add up.</p>
              <div className="card__meta">
                <div className="card__tags"><span>FastAPI</span><span>Next.js 14</span><span>AI</span></div>
              </div>
            </div>
          </div>

          <a className="card rv" href="https://flipiqbatch.com" target="_blank" rel="noopener">
            <span className="card__idx" aria-hidden="true">05</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wbatch" aria-hidden="true"></i>
              <div className="comp comp--batch">
<div className="bstream">
                  <div className="bstream__lane">
                    <div className="brw"><span>B07K2 · Hot Wheels TH · $199.00</span><span className="brt brt--ph">FANTASMA</span></div>
                    <div className="brw"><span>B0841 · LEGO City 60198</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B038M · Pack de 1 · $16.99</span><span className="brt brt--ma">MULTI-ASIN</span></div>
                    <div className="brw"><span>B00X4 · CeraVe Cleanser 8oz</span><span className="brt brt--gt">GATED</span></div>
                    <div className="brw"><span>B0913 · Stanley 40oz Quencher</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B0777 · Crest 3D White 2ct</span><span className="brt brt--ok">VENDIBLE</span></div>
                    <div className="brw"><span>B0BQ2 · Melissa & Doug Puzzle</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B08XY · Old Spice 3-pack</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B0155 · Hot Wheels 5-pack</span><span className="brt brt--ma">MULTI-ASIN</span></div>
                    <div className="brw"><span>B09ZZ · Tide Pods 42ct</span><span className="brt brt--gt">GATED</span></div>
                    <div className="brw"><span>B0GG1 · Sharpie 12ct</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B044D · OPI Nail Lacquer</span><span className="brt brt--ok">VENDIBLE</span></div>
                    <div className="brw"><span>B07K2 · Hot Wheels TH · $199.00</span><span className="brt brt--ph">FANTASMA</span></div>
                    <div className="brw"><span>B0841 · LEGO City 60198</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B038M · Pack de 1 · $16.99</span><span className="brt brt--ma">MULTI-ASIN</span></div>
                    <div className="brw"><span>B00X4 · CeraVe Cleanser 8oz</span><span className="brt brt--gt">GATED</span></div>
                    <div className="brw"><span>B0913 · Stanley 40oz Quencher</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B0777 · Crest 3D White 2ct</span><span className="brt brt--ok">VENDIBLE</span></div>
                    <div className="brw"><span>B0BQ2 · Melissa & Doug Puzzle</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B08XY · Old Spice 3-pack</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B0155 · Hot Wheels 5-pack</span><span className="brt brt--ma">MULTI-ASIN</span></div>
                    <div className="brw"><span>B09ZZ · Tide Pods 42ct</span><span className="brt brt--gt">GATED</span></div>
                    <div className="brw"><span>B0GG1 · Sharpie 12ct</span><span className="brt brt--x">DESCARTE</span></div>
                    <div className="brw"><span>B044D · OPI Nail Lacquer</span><span className="brt brt--ok">VENDIBLE</span></div>
                  </div>
                </div>
                <div className="bcatch"><span>CeraVe 19oz · ROI 42%</span><em>VETA ✓</em></div>
                <span className="scap">10,000 rows → 12</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>05</i>Flip IQ Batch</span><span className="chip chip--live">Live</span></div>
              <p className="card__desc">10,000-row supplier lists → a short gold list in minutes. Native PDF extraction up to 300 pages, ghost-price and multi-ASIN signals.</p>
              <div className="card__meta">
                <div className="card__tags"><span>FastAPI</span><span>Workers</span><span>Redis</span></div>
                <span className="card__url">flipiqbatch.com</span>
                <span className="card__arrow"><ArrowIcon /></span>
              </div>
            </div>
          </a>

          <div className="card rv">
            <span className="card__idx" aria-hidden="true">06</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wirr" aria-hidden="true"></i>
              <div className="comp comp--irr">
                <div className="irt fl fl-a">
                  <div className="irj"><em>07:30</em><div><b>Riverside HOA</b><span>System activation</span></div><i className="ipill ipill--done">✓ $480</i></div>
                  <div className="irnow"><i>Now</i></div>
                  <div className="irj irj--live"><em>09:15</em><div><b>Oak Park</b><span>Valve repair · zone 4</span></div><i className="ipill ipill--live">On site</i></div>
                  <div className="irj"><em>11:30</em><div><b>Cedar Mills</b><span>Spring startup</span></div><i className="ipill ipill--sms">SMS sent</i></div>
                </div>
                <span className="scap">Dispatch → invoice</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>06</i>Irrigation</span><span className="chip">Field ops</span></div>
              <p className="card__desc">Field-service ops for irrigation contractors — jobs, scheduling, invoices and SMS reminders.</p>
              <div className="card__meta">
                <div className="card__tags"><span>Next.js</span><span>shadcn/ui</span></div>
              </div>
            </div>
          </div>

          <a className="card rv" href="https://www.ddimperium.com" target="_blank" rel="noopener">
            <span className="card__idx" aria-hidden="true">07</span>
            <div className="card__stage" aria-hidden="true">
              <i className="wash wash--row wash--wdd" aria-hidden="true"></i>
              <div className="comp comp--dd">
                <div className="dlock fl fl-a">
                  <span className="dword">IMPERIUM</span>
                  <span className="dsub">Distribuidora mayorista · Miami · USA &amp; LATAM</span>
                  <span className="dbrands">Tide · Nestlé · Hershey&rsquo;s · Dove · Gatorade · Heinz</span>
                </div>
                <div className="dchain fl fl-b">
                  <div><i></i><b>Sourcing estratégico</b><span>Origen</span></div>
                  <div><i></i><b>Logística integrada</b><span>Tránsito</span></div>
                  <div><i></i><b>Retail readiness</b><span>Preparación</span></div>
                  <div><i></i><b>Cumplimiento y calidad</b><span>Garantía</span></div>
                </div>
                <div className="dcta fl fl-c"><span>Solicitar catálogo</span><i>→</i></div>
                <span className="scap">Wholesale · factory-direct</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>07</i>Imperium Trade</span><span className="chip chip--live">Live</span></div>
              <p className="card__desc">Wholesale catalog for sellers &amp; retail — factory-direct sourcing, guaranteed authenticity and integrated logistics across the Americas &amp; Europe.</p>
              <div className="card__meta">
                <div className="card__tags"><span>Gated catalog</span><span>Factory-direct</span></div>
                <span className="card__url">ddimperium.com</span>
                <span className="card__arrow"><ArrowIcon /></span>
              </div>
            </div>
          </a>
        </div>

        <div className="wcount" id="wcount" aria-hidden="true">01 / 06</div>
      </div>
    </div>
  
    <div className="wrap">
      <a className="nudge rv" href="#contact">
        <span className="nudge__q">Running one of these problems in your own ops?</span>
        <span className="nudge__a">Bring it to a 30-minute intro call
          <ArrowIcon />
        </span>
      </a>
    </div>
  </section>
  );
}
