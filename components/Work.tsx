import ArrowIcon from "./ArrowIcon";

// ═══════════ WORK ═══════════
export default function Work() {
  return (
  <section className="sec" id="work" data-screen-label="Work">
    <div className="wrap">
      <div className="sec__head rv">
        <div>
          <span className="eyebrow">Problems, retired</span>
          <h2 className="sec__title">Built here. Running now.</h2>
        </div>
        <span className="sec__note">09 shipped · 06 in production</span>
      </div>

      <div className="workx">

        {/* featured: GymAPI */}
        <a className="card feat rv" href="https://github.com/Alexmontesino96/Gym_App_IOS" target="_blank" rel="noopener">
          <div className="feat__info">
            <div className="chiprow"><span className="chip chip--live">Live</span><span className="chip">Flagship SaaS</span></div>
            <span className="feat__name"><i>01</i>GymAPI</span>
            <p className="feat__desc">Multi-tenant gym platform — memberships, access control, classes and Stripe billing, with a realtime admin and a native iOS app. Taken from first schema to production traffic by one team.</p>
            <div className="feat__proof">
              <div><span>End to end</span><b>Schema → App Store</b></div>
              <div><span>Billing</span><b>Stripe · in production</b></div>
              <div><span>Tenancy</span><b>Multi-gym, day one</b></div>
            </div>
            <div className="feat__meta">
              <div className="card__tags"><span>FastAPI</span><span>PostgreSQL</span><span>Stripe</span><span>Swift</span></div>
              <span className="card__arrow"><ArrowIcon /></span>
            </div>
          </div>
          <div className="feat__stage" aria-hidden="true">
            <div className="comp comp--gym">
              <div className="gshot gs2 fl fl-b"><img src="/assets/products/apps/gym-clases.png" alt="" /></div>
              <div className="gshot gs1 fl fl-a"><img src="/assets/products/apps/gym-home.png" alt="" /></div>
              <span className="scap">Multi-tenant · iOS + Web</span>
            </div>
          </div>
        </a>

        <div className="wgrid">
          <a className="card rv" href="https://www.getflipiq.com" target="_blank" rel="noopener">
            <div className="card__stage" aria-hidden="true">
              <div className="comp comp--flip">
                <div className="fbar"><i></i><span>0 09283 60959 7</span></div>
                <div className="fshot fl fl-a"><img src="/assets/products/apps/flip-verdict.png" alt="" /></div>
                <div className="fcatch fl fl-c"><span><i>eBay · </i>+$28.64</span><em>143% ROI</em></div>
                <span className="scap">Scan → verdict</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>02</i>Flip IQ</span><span className="chip chip--live">Live</span></div>
              <p className="card__desc">Live consumer product: scan a barcode → buy / watch / pass, with AI spelling out the why. Designed, built and shipped end to end.</p>
              <div className="card__meta">
                <div className="card__tags"><span>Next.js</span><span>FastAPI</span><span>AI</span></div>
                <span className="card__arrow"><ArrowIcon /></span>
              </div>
            </div>
          </a>

          <div className="card rv">
            <div className="card__stage" aria-hidden="true">
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
            <div className="card__stage" aria-hidden="true">
              <div className="comp comp--back">
                <div className="bkled fl fl-a">
                  <div className="bkled__head"><b>B00X4 · CeraVe 19oz</b><span>BOH 18u</span></div>
                  <div className="bkr bkr--in"><i>IN</i><span>+24 · receiving</span><em>09:12</em></div>
                  <div className="bkr bkr--out"><i>OUT</i><span>−6 · sales floor</span><em>11:40</em></div>
                  <div className="bkr bkr--anom"><i>OUT</i><span>−12 · no sale matched</span><em>14:03</em></div>
                  <div className="bkr bkr--chk"><i>CHK</i><span>18u · count ok</span><em>17:25</em></div>
                </div>
                <span className="scap">UPC-level traceability</span>
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
            <div className="card__stage" aria-hidden="true">
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
                <span className="card__arrow"><ArrowIcon /></span>
              </div>
            </div>
          </a>

          <div className="card rv">
            <div className="card__stage" aria-hidden="true">
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
            <div className="card__stage" aria-hidden="true">
              <div className="comp comp--dd">
                <span className="dword">IMPERIUM</span>
                <span className="scap">Wholesale · MOQ 1 pallet</span>
              </div>
            </div>
            <div className="card__info">
              <div className="card__head"><span className="card__name"><i>07</i>Imperium Trade</span><span className="chip chip--live">Live</span></div>
              <p className="card__desc">Wholesale catalog for sellers &amp; retail — factory-direct sourcing, guaranteed authenticity and integrated logistics across the Americas &amp; Europe.</p>
              <div className="card__meta">
                <div className="card__tags"><span>Gated catalog</span><span>MOQ · 1 pallet</span></div>
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
