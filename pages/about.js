"use strict";

module.exports = {
  title: "About — LogiFin",
  description:
      "LogiFin is rebuilding the financial plumbing of Indian road freight.",
  render() {
    return `
<!-- HERO -->
<section class="section bg-soft" style="padding-top: 80px; padding-bottom: 64px;" data-screen-label="01 Hero">
  <div class="wrap" style="max-width: 920px;">
    <span class="eyebrow">About LogiFin</span>
    <h1 class="h-display h-display-xl" style="margin-top: 14px;">
      Rebuilding the financial
plumbing of Indian freight.
    </h1>
  </div>
</section>

<!-- MISSION -->
<section class="section section--tight" data-screen-label="02 Mission">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start;" class="mission-grid">
      <div class="reveal">
        <span class="eyebrow">Our mission</span>
        <h2 class="h-display h-display-lg" style="margin-top: 12px;">Capital should move
as fast as goods.</h2>
      </div>
      <div class="reveal">
        <p class="lede" style="margin-bottom: 24px;">
          India moves <strong style="color:var(--ink); font-weight:500;">70% of its freight</strong> on trucks. Yet the money behind those trucks moves on a schedule designed in 1985 — paper bilties, 60-day cycles, branch visits, and follow-up calls.
        </p>
        <p class="lede" style="margin-bottom: 24px;">
          LogiFin is the layer that fixes it. By connecting shippers, fleet owners, and lenders on one platform — and by underwriting every invoice against the actual movement of goods — we turn 60-day receivables into 24-hour disbursals.
        </p>
        <p class="lede">
          Not a payment app. Not a load board. A financial operating system for the way Indian trucking actually runs.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- PRINCIPLES -->
<section class="section bg-tint" style="border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);" data-screen-label="03 Principles">
  <div class="wrap">
    <div class="section-head reveal section-head--left" style="text-align: left; margin-left: 0;">
      <span class="eyebrow">What we believe</span>
      <h2 class="h-display h-display-lg" style="margin-top: 12px;">Six principles
we underwrite by.</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;" class="principles-grid reveal">
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">01</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">Real goods, real money</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Every rupee disbursed is tied to a verified shipment with GPS proof, e-way bill, and POD. No invoice discounting on vapor.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">02</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">Pricing reflects risk</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Dynamic, transparent rates — never a flat fee that quietly subsidizes worse borrowers at the expense of good ones.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">03</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">Diligence at speed</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Underwriting in minutes, not days — because the data sources are wired up, not photocopied.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">04</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">Three sides, one trust</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">The platform only works if shippers, fleets, and lenders all win. We won't ship a feature that tilts the balance.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">05</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">Boring infrastructure</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Financial plumbing should be invisible. Predictable, well-documented, auditable — not novel for novelty's sake.</p>
      </div>
      <div class="card" style="padding: 32px;">
        <div class="text-mono" style="font-size: 12px; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 14px;">06</div>
        <h3 class="h-display h-display-sm" style="margin-bottom: 8px;">India first</h3>
        <p class="text-muted" style="font-size: 14px; line-height: 1.55;">Built for the corridor, the language, the document set, and the unit economics of Indian road freight. No templates from abroad.</p>
      </div>
    </div>

    <style>
      @media (max-width: 960px) { .principles-grid { grid-template-columns: 1fr 1fr !important; } }
      @media (max-width: 640px) { .principles-grid { grid-template-columns: 1fr !important; } .mission-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
      @media (max-width: 960px) { .mission-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
    </style>
  </div>
</section>

<!-- TEAM -->
<section class="section" data-screen-label="04 Team">
  <div class="wrap">
    <div class="section-head reveal">
      <span class="eyebrow">The team</span>
      <h2 class="h-display h-display-lg">The people behind
the platform.</h2>
    </div>

    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;" class="team-grid reveal">

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/alok-pancholi.jpg" alt="Alok Pancholi" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Alok Pancholi</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Founder &amp; CEO</div>
        <p class="team-bio">25+ years in engineering and management. Distributed systems expert. MS, Texas A&amp;M; B.Tech, IIT-BHU.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/yogesh-sharma.jpg" alt="Yogesh Sharma" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Yogesh Sharma</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">SVP, Delivery</div>
        <p class="team-bio">24+ years in IT. Architect across Java, cloud, AI, and blockchain. MBA, University of Phoenix.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/Jeff_Filiault.png" alt="Jeff Filiault" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Jeff Filiault</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Director, Business Development</div>
        <p class="team-bio">20+ years in sales leadership. Mechanical engineer with AI specialisation. Fluent in English, Spanish, and Mandarin.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/Mario_Gilbert.jfif" alt="Mario Gilbert" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Mario Gilbert</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Business Development Manager</div>
        <p class="team-bio">15+ years in business development and inside sales across SaaS, insurance, and services.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/jaideep-singh.jpg" alt="Jaideep Singh" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Jaideep Singh</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Senior Director, Delivery</div>
        <p class="team-bio">16+ years in IT. Advanced Certified ScrumMaster and Product Owner. MBA in Information Technology.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/ramsingh-palsaniya.jpg" alt="Ram Singh" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Ram Singh</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Senior Technical Lead</div>
        <p class="team-bio">13+ years in IT. Data engineering specialist; SnowPro Core and Advanced certified.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/saurabh-jain.jpg" alt="Saurabh Jain" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Saurabh Jain</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Senior Technical Lead</div>
        <p class="team-bio">17+ years in IT. Java and Spring Boot specialist. Sun Certified Java Programmer, SnowPro Core certified.</p>
      </div>

      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="https://www.faberwork.com/static/img/bio/vikas-sharma.jpg" alt="Vikas Sharma" class="team-photo"/>
        </div>
        <h4 class="h-display h-display-sm" style="margin-top: 16px;">Vikas Sharma</h4>
        <div class="text-muted" style="font-size: 13.5px; margin-top: 4px;">Senior Technical Lead</div>
        <p class="team-bio">15+ years in IT. Systems designer for energy, transportation, and ERP. SnowPro Core certified.</p>
      </div>

    </div>

    <style>
      .team-card { display: flex; flex-direction: column; }
      .team-photo-wrap { aspect-ratio: 4/5; border-radius: var(--radius-lg); overflow: hidden; background: var(--bg-2); }
      .team-photo { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
      .team-bio { font-size: 13px; color: var(--ink-3); line-height: 1.55; margin-top: 8px; }
      @media (max-width: 960px) { .team-grid { grid-template-columns: 1fr 1fr !important; } }
      @media (max-width: 560px) { .team-grid { grid-template-columns: 1fr !important; } }
    </style>
  </div>
</section>

<!-- BACKED BY -->
<section class="section bg-deep" data-screen-label="05 Backed by">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1fr 1.6fr; gap: 64px; align-items: center;" class="backed-grid">
      <div class="reveal">
        <span class="eyebrow" style="color: var(--accent-dim);">Backed by</span>
        <h2 class="h-display h-display-lg" style="color:#fff; margin-top: 12px;">Investors who
know freight.</h2>
      </div>
      <div class="reveal" style="display:flex; align-items: center; gap: 56px; flex-wrap: wrap; opacity: 0.85;">
        <span style="font-family: var(--font-display); font-weight: 600; font-size: 22px; color:#fff; letter-spacing: -0.02em;">Peak<span style="color: var(--accent-dim);">XV</span></span>
        <span style="font-family: var(--font-display); font-weight: 700; font-size: 18px; color:#fff; letter-spacing: 0.1em;">BLUME</span>
        <span style="font-family: var(--font-display); font-style: italic; font-weight: 500; font-size: 22px; color:#fff;">Stride</span>
        <span style="font-family: var(--font-mono); font-weight: 500; font-size: 18px; color:#fff; letter-spacing: -0.02em;">accel/<span style="color: var(--accent-dim);">in</span></span>
        <span style="font-family: var(--font-display); font-weight: 600; font-size: 20px; color:#fff;">◆ Tiger Edge</span>
      </div>
    </div>

    <style>
      @media (max-width: 880px) {
        .backed-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      }
    </style>
  </div>
</section>

<!-- OFFICES + CONTACT -->
<section class="section" data-screen-label="06 Offices">
  <div class="wrap">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;" class="contact-grid">
      <div class="reveal">
        <span class="eyebrow">Offices</span>
        <h2 class="h-display h-display-lg" style="margin-top: 12px;">Find us in Bengaluru
or on a highway.</h2>
        <div style="margin-top: 32px; display: flex; flex-direction: column; gap: 18px;">
          <div>
            <div class="text-mono" style="font-size: 12px; color: var(--ink-3); letter-spacing: 0.1em; text-transform: uppercase;">Headquarters</div>
            <div style="margin-top: 6px; font-size: 15px;">7th floor, Prestige Atlanta
Koramangala 1st Block, Bengaluru 560034</div>
          </div>
          <div>
            <div class="text-mono" style="font-size: 12px; color: var(--ink-3); letter-spacing: 0.1em; text-transform: uppercase;">Operations centre</div>
            <div style="margin-top: 6px; font-size: 15px;">B-12, MIDC Industrial Estate
Bhiwandi, Maharashtra 421302</div>
          </div>
        </div>
      </div>

      <div class="reveal card" style="padding: 32px;">
        <span class="eyebrow">Get in touch</span>
        <h3 class="h-display h-display-md" style="margin-top: 12px; margin-bottom: 24px;">We answer within 4 business hours.</h3>
        <div style="display: flex; flex-direction: column; gap: 14px; font-size: 14.5px;">
          <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--line); padding-bottom: 14px;">
            <span class="text-muted">Sales</span>
            <a href="mailto:sales@logifin.in" style="color: var(--accent); font-weight: 500;">sales@logifin.in</a>
          </div>
          <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--line); padding-bottom: 14px;">
            <span class="text-muted">Capital markets</span>
            <a href="mailto:capital@logifin.in" style="color: var(--accent); font-weight: 500;">capital@logifin.in</a>
          </div>
          <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--line); padding-bottom: 14px;">
            <span class="text-muted">Press</span>
            <a href="mailto:press@logifin.in" style="color: var(--accent); font-weight: 500;">press@logifin.in</a>
          </div>
          <div style="display:flex; justify-content: space-between;">
            <span class="text-muted">Support (24/7)</span>
            <span class="text-mono" style="font-weight: 500;">1800-LOGIFIN</span>
          </div>
        </div>
      </div>
    </div>

    <style>
      @media (max-width: 880px) {
        .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      }
    </style>
  </div>
</section>
`;
  },
};
