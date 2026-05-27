"use strict";

const { mailtoFor } = require("../components/contact");

module.exports = {
  title: "How it works — LogiFin",
  description:
    "A deep dive into how LogiFin moves money from invoice to bank in 24–48 hours.",
  render() {
    return `
<!-- ============================== PAGE HERO ============================== -->
<section class="section bg-soft" style="padding-top: 80px; padding-bottom: 80px;" data-screen-label="01 Hero">
  <div class="wrap" style="max-width: 880px; text-align: center;">
    <span class="eyebrow" style="justify-content: center;">How it works</span>
    <h1 class="h-display h-display-xl" style="margin-top: 14px;">
      From trip created<br/>to cash in 4 steps.
    </h1>
    <p class="lede lede--center" style="margin-top: 28px; font-size: 19px;">
      No paperwork mountain. No tea-and-biscuit branch visits. Every step is digital, verified against real freight data, and visible on one dashboard.
    </p>
  </div>
</section>

<!-- ============================== ACTORS ============================== -->
<section class="section section--tight" data-screen-label="02 Actors">
  <div class="wrap">
    <div style="text-align:center; margin-bottom: 56px;" class="reveal">
      <span class="eyebrow" style="justify-content: center;">The cast</span>
      <h2 class="h-display h-display-lg" style="margin-top: 12px;">Three roles. One flow.</h2>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px;" class="actors-grid reveal">
      <div class="card" style="padding: 28px;">
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">Actor 01</div>
        <h3 class="h-display h-display-md" style="margin-bottom: 8px;">Load provider</h3>
        <p class="text-muted" style="font-size: 14px;">Posts the trip. Pays the invoice at net terms.</p>
      </div>
      <div class="card" style="padding: 28px; background: var(--accent); color:#fff; border-color: transparent;">
        <div style="font-family: var(--font-mono); font-size: 11px; color: rgba(255,255,255,0.7); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">Actor 02</div>
        <h3 class="h-display h-display-md" style="margin-bottom: 8px; color:#fff;">Vehicle provider</h3>
        <p style="color: rgba(255,255,255,0.8); font-size: 14px;">Moves the freight. Uploads the invoice. Gets paid.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--ink-3); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">Actor 03</div>
        <h3 class="h-display h-display-md" style="margin-bottom: 8px;">Lender</h3>
        <p class="text-muted" style="font-size: 14px;">Funds the invoice. Earns return on tenor.</p>
      </div>
    </div>
  </div>

  <style>
    @media (max-width: 860px) {
      .actors-grid { grid-template-columns: 1fr !important; }
    }
  </style>
</section>

<!-- ============================== STEP DETAILS ============================== -->
<section class="section" style="padding-top: 0;" data-screen-label="03 Step 1">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center;" class="step-grid reveal">
      <div>
        <div class="text-mono" style="font-size: 14px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 16px;">STEP / 01</div>
        <h2 class="h-display h-display-lg" style="margin-bottom: 24px;">Trip is created<br/>&amp; verified.</h2>
        <p class="lede">
          A load provider posts a shipment. They pick a vehicle from LogiFin's vetted carrier network or assign one of their regular fleet partners. The system pulls e-way bill, GST, and GPS data the moment the trip is acknowledged.
        </p>
        <ul style="margin-top: 28px; display:flex; flex-direction: column; gap: 12px; font-size: 14.5px;">
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">~5m</span> Trip posted &amp; vehicle assigned</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Auto</span> E-way bill &amp; FASTag verification</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Live</span> GPS handshake with carrier</li>
        </ul>
      </div>

      <!-- Mock screen: trip creation -->
      <div class="card" style="padding: 0; box-shadow: var(--shadow-lg); overflow: hidden;">
        <div style="padding: 18px 22px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 10px; height: 10px; border-radius: 999px; background: #ff5f57;"></div>
            <div style="width: 10px; height: 10px; border-radius: 999px; background: #ffbd2e;"></div>
            <div style="width: 10px; height: 10px; border-radius: 999px; background: #28c941;"></div>
          </div>
          <span class="text-mono text-muted" style="font-size: 11px;">logifin.in/trips/new</span>
          <span class="text-mono text-muted" style="font-size: 11px;">●●●</span>
        </div>
        <div style="padding: 28px;">
          <div style="display:flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
            <div>
              <div class="text-mono text-muted" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">New trip</div>
              <div class="h-display h-display-md" style="margin-top: 6px;">Mumbai → Hyderabad</div>
            </div>
            <span class="chip chip--success chip--dot">Verified</span>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
            <div style="padding: 14px 16px; background: var(--bg-2); border-radius: 12px;">
              <div class="stat-label" style="margin-top: 0;">Distance</div>
              <div class="text-mono" style="font-size: 18px; margin-top: 4px; font-weight: 500;">711 km</div>
            </div>
            <div style="padding: 14px 16px; background: var(--bg-2); border-radius: 12px;">
              <div class="stat-label" style="margin-top: 0;">ETA</div>
              <div class="text-mono" style="font-size: 18px; margin-top: 4px; font-weight: 500;">2d 4h</div>
            </div>
            <div style="padding: 14px 16px; background: var(--bg-2); border-radius: 12px;">
              <div class="stat-label" style="margin-top: 0;">Vehicle</div>
              <div style="font-size: 14px; margin-top: 4px; font-weight: 500;">MH-12 KK 4421</div>
            </div>
            <div style="padding: 14px 16px; background: var(--bg-2); border-radius: 12px;">
              <div class="stat-label" style="margin-top: 0;">Carrier</div>
              <div style="font-size: 14px; margin-top: 4px; font-weight: 500;">Pawar Roadlines</div>
            </div>
          </div>
          <div style="padding: 12px 16px; background: var(--success-soft); border-radius: 10px; display: flex; align-items: center; gap: 10px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            <span style="font-size: 13px; color: var(--success);">E-way bill 481032187 verified · FASTag active</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STEP 2 -->
<section class="section" style="background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);" data-screen-label="04 Step 2">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center;" class="step-grid reveal">
      <!-- Mock screen: invoice upload -->
      <div class="card" style="padding: 28px; box-shadow: var(--shadow-lg);">
        <div style="display:flex; justify-content: space-between; align-items: flex-start; margin-bottom: 22px;">
          <div>
            <div class="text-mono text-muted" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Invoice review</div>
            <div class="h-display h-display-md" style="margin-top: 6px;">INV-2026-04812</div>
          </div>
          <div class="text-mono" style="font-size: 24px; font-weight: 500;">₹5,35,000</div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display:flex; justify-content: space-between; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Shipper credit rating</span>
            <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 500; color: var(--success);">A+ (94/100)</span>
          </div>
          <div style="display:flex; justify-content: space-between; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Past payment history</span>
            <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 500;">38 invoices · 0 defaults</span>
          </div>
          <div style="display:flex; justify-content: space-between; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Concentration check</span>
            <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 500; color: var(--success);">Pass</span>
          </div>
          <div style="display:flex; justify-content: space-between; padding: 14px 16px; background: var(--accent-soft); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--accent-ink); font-weight: 500;">Approved advance</span>
            <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 500; color: var(--accent-ink);">₹4,82,000 · 90%</span>
          </div>
        </div>
      </div>

      <div>
        <div class="text-mono" style="font-size: 14px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 16px;">STEP / 02</div>
        <h2 class="h-display h-display-lg" style="margin-bottom: 24px;">Invoice uploaded.</h2>
        <p class="lede">
          As soon as goods are delivered, the vehicle provider uploads the invoice through the app or web dashboard. LogiFin checks the shipper's credit, the carrier's history, and concentration risk across the lender pool.
        </p>
        <ul style="margin-top: 28px; display:flex; flex-direction: column; gap: 12px; font-size: 14.5px;">
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">~15m</span> Underwriting decisioning</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Auto</span> GST &amp; bank statement pull</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Live</span> Pool concentration check</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- STEP 3 -->
<section class="section" data-screen-label="05 Step 3">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center;" class="step-grid reveal">
      <div>
        <div class="text-mono" style="font-size: 14px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 16px;">STEP / 03</div>
        <h2 class="h-display h-display-lg" style="margin-bottom: 24px;">Lender funds<br/>the invoice.</h2>
        <p class="lede">
          The approved invoice is matched to a lender or pool. Funds move via IMPS/RTGS directly into the vehicle provider's verified bank account. The lender receives an asset assignment with the invoice, e-way bill, and proof of delivery attached.
        </p>
        <ul style="margin-top: 28px; display:flex; flex-direction: column; gap: 12px; font-size: 14.5px;">
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">24–48h</span> First-time disbursal</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">&lt;4h</span> Repeat shipper disbursal</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Live</span> Settlement notifications</li>
        </ul>
      </div>

      <!-- Disbursal mock -->
      <div class="card" style="padding: 28px; box-shadow: var(--shadow-lg); background: var(--ink); color: #fff; border-color: transparent; position: relative; overflow: hidden;">
        <div style="position: absolute; inset: 0; background: var(--grad-cta); opacity: 0.6;"></div>
        <div style="position: relative;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 36px;">
            <div>
              <div class="text-mono" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6);">Disbursal</div>
              <div class="text-mono" style="font-size: 14px; margin-top: 4px;">TXN-9871423</div>
            </div>
            <span class="chip chip--success chip--dot">Settled</span>
          </div>

          <div class="stat-num" style="font-size: 64px; color: #fff;">₹4.82L</div>
          <div class="text-mono" style="font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 8px;">IMPS · HDFC ••3421 · 14:22:38 IST</div>

          <div style="height: 1px; background: rgba(255,255,255,0.12); margin: 28px 0;"></div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div>
              <div class="text-mono" style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5);">Lender</div>
              <div style="margin-top: 4px; font-size: 13px;">NorthEdge Cap</div>
            </div>
            <div>
              <div class="text-mono" style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5);">Tenor</div>
              <div style="margin-top: 4px; font-size: 13px;">38 days</div>
            </div>
            <div>
              <div class="text-mono" style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5);">Rate</div>
              <div style="margin-top: 4px; font-size: 13px;">11.4% p.a.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STEP 4 -->
<section class="section" style="background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);" data-screen-label="06 Step 4">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center;" class="step-grid reveal">
      <!-- Settlement mock -->
      <div class="card" style="padding: 28px; box-shadow: var(--shadow-lg);">
        <div style="display:flex; justify-content: space-between; align-items: flex-start; margin-bottom: 26px;">
          <div>
            <div class="text-mono text-muted" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Maturity ledger</div>
            <div class="h-display h-display-md" style="margin-top: 6px;">06 Jun 2026</div>
          </div>
          <span class="chip chip--success chip--dot">Closed</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div style="display:grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Bharat Cement → LogiFin escrow</span>
            <span class="text-mono" style="font-size: 13px; font-weight: 500;">₹5,35,000</span>
          </div>
          <div style="display:grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Escrow → NorthEdge (principal)</span>
            <span class="text-mono" style="font-size: 13px; font-weight: 500;">₹4,82,000</span>
          </div>
          <div style="display:grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Escrow → NorthEdge (return)</span>
            <span class="text-mono" style="font-size: 13px; font-weight: 500; color: var(--success);">+₹19,082</span>
          </div>
          <div style="display:grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; background: var(--bg-2); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--ink-3);">Escrow → Pawar Roadlines (residual)</span>
            <span class="text-mono" style="font-size: 13px; font-weight: 500;">₹33,918</span>
          </div>
          <div style="display:grid; grid-template-columns: 1fr auto; gap: 12px; padding: 14px 16px; background: var(--accent-soft); border-radius: 10px;">
            <span style="font-size: 13px; color: var(--accent-ink); font-weight: 500;">Cycle complete</span>
            <span class="text-mono" style="font-size: 13px; font-weight: 500; color: var(--accent-ink);">38 days · 0 disputes</span>
          </div>
        </div>
      </div>

      <div>
        <div class="text-mono" style="font-size: 14px; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 16px;">STEP / 04</div>
        <h2 class="h-display h-display-lg" style="margin-bottom: 24px;">Shipper settles,<br/>everyone earns.</h2>
        <p class="lede">
          On the due date, the load provider pays the full invoice into a LogiFin-managed escrow. Funds are automatically split — principal and return to the lender, residual to the vehicle provider, fee retained.
        </p>
        <ul style="margin-top: 28px; display:flex; flex-direction: column; gap: 12px; font-size: 14.5px;">
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Auto</span> Tri-party settlement via escrow</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">Live</span> Real-time accounting entries</li>
          <li style="display:flex; gap:12px; align-items:center;"><span class="chip chip--accent" style="min-width: 44px; justify-content:center;">0.41%</span> Net default rate to date</li>
        </ul>
      </div>
    </div>
  </div>

  <style>
    @media (max-width: 960px) {
      .step-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    }
  </style>
</section>

<!-- ============================== RISK FRAMEWORK ============================== -->
<section class="section bg-deep" data-screen-label="07 Risk">
  <div class="wrap">
    <div class="section-head reveal section-head--left" style="text-align: left; margin-left: 0; max-width: 720px;">
      <span class="eyebrow" style="color: var(--accent-dim);">Risk &amp; underwriting</span>
      <h2 class="h-display h-display-lg" style="margin-top: 12px;">How we keep<br/>the defaults low.</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;" class="risk-grid">
      <div class="card" style="padding: 28px;">
        <div class="text-mono" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-dim); margin-bottom: 10px;">Layer 01</div>
        <h4 class="h-display h-display-sm" style="color:#fff; margin-bottom: 10px;">Counterparty data</h4>
        <p style="font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;">GSTN, MCA filings, bank statements, prior LogiFin track record.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <div class="text-mono" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-dim); margin-bottom: 10px;">Layer 02</div>
        <h4 class="h-display h-display-sm" style="color:#fff; margin-bottom: 10px;">Transaction proof</h4>
        <p style="font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;">E-way bill, FASTag pings, GPS handshake, POD photographs.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <div class="text-mono" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-dim); margin-bottom: 10px;">Layer 03</div>
        <h4 class="h-display h-display-sm" style="color:#fff; margin-bottom: 10px;">Pool diversification</h4>
        <p style="font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;">Limits per shipper, per state, per industry — never more than 4% on any one name.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <div class="text-mono" style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-dim); margin-bottom: 10px;">Layer 04</div>
        <h4 class="h-display h-display-sm" style="color:#fff; margin-bottom: 10px;">Loss buffer</h4>
        <p style="font-size: 13.5px; color: rgba(255,255,255,0.65); line-height: 1.55;">Pool-level FLDG and arbitration partnerships keep individual exposure low.</p>
      </div>
    </div>

    <style>
      @media (max-width: 960px) { .risk-grid { grid-template-columns: 1fr 1fr !important; } }
      @media (max-width: 560px) { .risk-grid { grid-template-columns: 1fr !important; } }
    </style>
  </div>
</section>

<!-- ============================== CTA ============================== -->
<section class="section" data-screen-label="08 CTA">
  <div class="wrap" style="text-align: center; max-width: 700px;">
    <h2 class="h-display h-display-lg" style="margin-bottom: 24px;">Ready to see it in action?</h2>
    <p class="lede lede--center" style="margin-bottom: 36px;">Book a 15-minute walkthrough, or start onboarding straight away — both routes get you live this week.</p>
    <div style="display:flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="https://lf.rollingradius.com/" class="btn btn--accent btn--lg">Get started</a>
      <a href="${mailtoFor("home")}" class="btn btn--ghost btn--lg">Book a demo</a>
    </div>
  </div>
</section>
`;
  },
};
