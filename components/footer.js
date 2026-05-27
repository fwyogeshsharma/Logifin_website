"use strict";

const { mailtoFor } = require("./contact");

// Shared site footer.
function renderFooter() {
  return `
    <footer class="footer">
      <div class="wrap">
        <div class="footer__cols">
          <div class="footer__col">
            <a href="/" class="lf-logo" style="margin-bottom:18px;" aria-label="LogiFin home">
              <img src="/logifin.png" alt="LogiFin" class="lf-logo__img lf-logo__img--invert" />
            </a>
            <p style="font-size:14px; max-width:280px; margin-top: 14px; line-height:1.6;">
              Fast logistics financing for India's trucking industry. Built for load providers, fleet owners, and lenders.
            </p>
            <div style="display:flex; gap:10px; margin-top:24px;">
              <a href="#" aria-label="LinkedIn" style="width:36px; height:36px; border:1px solid rgba(255,255,255,0.15); border-radius:8px; display:inline-flex; align-items:center; justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V9.67H5.67v8.67zM7 8.34a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1m11.33 10V13.4c0-2.55-1.36-3.74-3.18-3.74a2.75 2.75 0 0 0-2.49 1.37V9.67h-2.67c.04.75 0 8.67 0 8.67h2.67V13.5a1.83 1.83 0 0 1 .09-.65 1.46 1.46 0 0 1 1.37-.98c.97 0 1.36.74 1.36 1.82v4.65z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" style="width:36px; height:36px; border:1px solid rgba(255,255,255,0.15); border-radius:8px; display:inline-flex; align-items:center; justify-content:center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer__col">
            <h5>Product</h5>
            <ul>
              <li><a href="/how-it-works">How it works</a></li>
              <li><a href="/shippers">For load providers</a></li>
              <li><a href="/fleets">For vehicle providers</a></li>
              <li><a href="/lenders">For lenders</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Company</h5>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="${mailtoFor("general")}">Contact</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Help center</a></li>
              <li><a href="#">API docs</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Grievance</a></li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span>© 2026 LogiFin Technologies Pvt. Ltd. · Registered in India</span>
          <span class="text-mono" style="font-size:11.5px; letter-spacing:0.1em; text-transform:uppercase;">Reg. NBFC partner network · CIN U66190KA2024PTC178432</span>
        </div>
      </div>
    </footer>
  `;
}

module.exports = renderFooter;
