"use strict";

module.exports = {
  title: "For vehicle providers — LogiFin",
  description:
    "Get paid in 24 hours, not 60 days. Up to 90% advance on every invoice. Built for fleet owners and owner-operators.",
  render() {
    return `
<!-- HERO -->
<section class="section bg-soft" style="padding-top: 72px; padding-bottom: 80px;" data-screen-label="01 Hero">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1.05fr 0.95fr; gap: 64px; align-items: center;" class="hero-grid">
      <div>
        <span class="chip chip--accent" style="margin-bottom: 22px;">For vehicle providers</span>
        <h1 class="h-display h-display-xl">
          Stop waiting<br/>
          <span style="color: var(--accent);">60 days to get paid.</span>
        </h1>
        <p class="lede" style="margin-top: 28px; font-size: 19px;">
          Upload your invoice, get up to <strong style="color:var(--ink); font-weight:500;">90% advance the same day</strong>. Keep your trucks moving without burning diesel on the way to a follow-up call.
        </p>
        <div style="display:flex; gap:12px; margin-top: 36px; flex-wrap: wrap;">
          <a href="https://lf.rollingradius.com/" class="btn btn--accent btn--lg">Get started
            <span class="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg></span>
          </a>
          <a href="/how-it-works" class="btn btn--ghost btn--lg">See how it works</a>
        </div>
      </div>

      <!-- Phone mockup -->
      <div style="display:flex; justify-content:center;">
        <div style="width: 320px; border-radius: 38px; background: var(--ink); padding: 14px; box-shadow: var(--shadow-lg);">
          <div style="background: var(--bg); border-radius: 26px; overflow: hidden;">
            <div style="padding: 18px 22px 0; display:flex; justify-content:space-between; align-items:center;">
              <span class="text-mono" style="font-size: 12px;">9:41</span>
              <span class="text-mono text-muted" style="font-size: 10px;">●●●●● 5G</span>
            </div>
            <div style="padding: 24px 22px 28px;">
              <div class="text-mono text-muted" style="font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase;">Today</div>
              <h3 class="h-display" style="font-size: 26px; margin-top: 4px; letter-spacing: -0.03em;">Cash in your bank</h3>

              <div class="stat-num" style="font-size: 48px; margin-top: 18px; color: var(--accent);">+₹4,82,000</div>
              <div class="text-mono text-muted" style="font-size: 11px; margin-top: 4px;">HDFC ••3421 · 31 min ago</div>

              <div style="height: 1px; background: var(--line); margin: 22px 0 16px;"></div>

              <div class="text-mono text-muted" style="font-size: 10.5px; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 14px;">Active line</div>

              <div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 10px;">
                <span style="font-size: 13px;">Used</span>
                <span class="text-mono" style="font-size: 13px; font-weight: 500;">₹14.2L / ₹40L</span>
              </div>
              <div style="height: 8px; background: var(--bg-2); border-radius: 999px; overflow: hidden;">
                <div style="width: 35%; height: 100%; background: var(--accent); border-radius: 999px;"></div>
              </div>

              <button style="margin-top: 22px; width: 100%; padding: 14px; background: var(--ink); color:#fff; border-radius: 14px; font-size: 14px; font-weight: 500;">Upload next invoice →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VALUE PROPS -->
<section class="section" data-screen-label="02 Value">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">For fleets</span>
      <h2 class="h-display h-display-lg">Built for the way<br/>fleets actually run.</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="vp-grid reveal">
      <div class="card" style="padding: 32px;">
        <div style="font-family: var(--font-display); font-weight: 500; font-size: 56px; color: var(--accent); letter-spacing: -0.04em; line-height: 1; margin-bottom: 16px;">24h</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 10px;">First disbursal</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Once you're onboarded, your first invoice funds within 24–48 hours. Repeat invoices land in under 4 hours.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div style="font-family: var(--font-display); font-weight: 500; font-size: 56px; color: var(--accent); letter-spacing: -0.04em; line-height: 1; margin-bottom: 16px;">90<span style="font-size: 0.5em;">%</span></div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 10px;">Of invoice value</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Up to 90% advance based on shipper rating. Residual settles automatically on the due date.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div style="font-family: var(--font-display); font-weight: 500; font-size: 56px; color: var(--accent); letter-spacing: -0.04em; line-height: 1; margin-bottom: 16px;">1.1<span style="font-size: 0.5em;">%/mo</span></div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 10px;">Rates start at</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Dynamic rates based on shipper rating, route, and tenor. No setup fees, no minimum, no penalty for early payment.</p>
      </div>
    </div>

    <!-- Secondary features -->
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 24px;" class="vp-grid-2 reveal">
      <div class="card" style="padding: 28px;">
        <h4 class="h-display h-display-sm" style="margin-bottom: 8px;">Revolving line, not a one-off loan</h4>
        <p class="text-muted" style="font-size: 14px; line-height: 1.6;">Your line grows with your trip volume. Use what you need, pay only for what you use, no commitment fees.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <h4 class="h-display h-display-sm" style="margin-bottom: 8px;">Works on your phone</h4>
        <p class="text-muted" style="font-size: 14px; line-height: 1.6;">Upload invoice photos from the cab. Hindi, Tamil, Telugu, Marathi, Kannada, Gujarati, English supported.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <h4 class="h-display h-display-sm" style="margin-bottom: 8px;">No personal guarantee for verified fleets</h4>
        <p class="text-muted" style="font-size: 14px; line-height: 1.6;">Build a positive history with 3 funded trips, and we drop the PG requirement for invoices from rated shippers.</p>
      </div>
      <div class="card" style="padding: 28px;">
        <h4 class="h-display h-display-sm" style="margin-bottom: 8px;">Local support in 38 cities</h4>
        <p class="text-muted" style="font-size: 14px; line-height: 1.6;">Onboarding agents who speak your language, in your city. WhatsApp support for everything else.</p>
      </div>
    </div>
  </div>

  <style>
    @media (max-width: 960px) {
      .vp-grid { grid-template-columns: 1fr !important; }
      .vp-grid-2 { grid-template-columns: 1fr !important; }
      .hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
    }
  </style>
</section>

<!-- ELIGIBILITY -->
<section class="section bg-tint" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);" data-screen-label="03 Eligibility">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: start;" class="elig-grid">
      <div class="reveal">
        <span class="eyebrow">Eligibility</span>
        <h2 class="h-display h-display-lg" style="margin-top: 12px;">Who we work with.</h2>
        <p class="lede" style="margin-top: 22px;">
          We deliberately keep eligibility broad. If you operate trucks for hire and have invoices to back it, you're likely a fit.
        </p>
      </div>

      <div class="reveal elig-list" style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="card" style="padding: 22px;">
          <div class="text-mono" style="font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">Minimum</div>
          <div style="font-weight: 500;">1 commercial vehicle</div>
        </div>
        <div class="card" style="padding: 22px;">
          <div class="text-mono" style="font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">Vintage</div>
          <div style="font-weight: 500;">6+ months operating</div>
        </div>
        <div class="card" style="padding: 22px;">
          <div class="text-mono" style="font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">Documents</div>
          <div style="font-weight: 500;">RC, PAN, GST, bank stmt</div>
        </div>
        <div class="card" style="padding: 22px;">
          <div class="text-mono" style="font-size: 11px; color: var(--accent); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">Geography</div>
          <div style="font-weight: 500;">14 states &amp; growing</div>
        </div>
      </div>
    </div>

    <style>
      @media (max-width: 960px) {
        .elig-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
      @media (max-width: 520px) {
        .elig-list { grid-template-columns: 1fr !important; }
      }
    </style>
  </div>
</section>

<!-- TESTIMONIAL -->
<section class="section" data-screen-label="04 Quote">
  <div class="wrap">
    <div class="reveal" style="max-width: 900px; margin: 0 auto; text-align: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent)" style="opacity: 0.7; margin: 0 auto 24px;"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
      <p class="h-display" style="font-size: clamp(24px, 2.6vw, 36px); line-height: 1.3; letter-spacing: -0.02em; margin-bottom: 32px; max-width: 800px; margin-left: auto; margin-right: auto;">
        Before LogiFin, half my month was chasing payments. Now I run an extra 4 trips a week because I'm not stuck waiting on cash.
      </p>
      <div style="display:flex; align-items:center; gap: 14px; justify-content: center;">
        <div style="width: 48px; height: 48px; border-radius: 999px; background: linear-gradient(135deg, #ffd7a1, #ff9a3c); display:flex; align-items:center; justify-content:center; color:#fff; font-family: var(--font-display); font-weight: 600;">RP</div>
        <div style="text-align: left;">
          <div style="font-weight: 500;">Rajesh Pawar</div>
          <div class="text-muted" style="font-size: 13px;">Owner, Pawar Roadlines · 42 trucks</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="section bg-deep" style="background-color: var(--ink); background-image: var(--grad-cta);" data-screen-label="05 CTA">
  <div class="wrap" style="text-align: center; max-width: 700px;">
    <h2 class="h-display h-display-lg" style="color:#fff; margin-bottom: 24px;">Your next invoice<br/>could fund tomorrow.</h2>
    <p class="lede lede--center" style="color: rgba(255,255,255,0.7); margin-bottom: 36px;">15-minute signup. No upfront fee.</p>
    <div style="display:flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="https://lf.rollingradius.com/" class="btn btn--accent btn--lg">Get started</a>
      <a href="#" class="btn btn--ghost btn--lg" style="color:#fff; border-color: rgba(255,255,255,0.25);">Talk to an agent</a>
    </div>
  </div>
</section>
`;
  },
};
