"use strict";

// Shared top navigation. `currentPage` is the page key (e.g. "index",
// "shippers") used to highlight the active link.
const NAV_LINKS = [
  { href: "/", label: "Home", key: "index" },
  { href: "/how-it-works", label: "How it works", key: "how-it-works" },
  { href: "/shippers", label: "Load providers", key: "shippers" },
  { href: "/fleets", label: "Vehicle providers", key: "fleets" },
  { href: "/lenders", label: "Lenders", key: "lenders" },
  { href: "/about", label: "About", key: "about" },
];

function renderNav(currentPage) {
  const links = NAV_LINKS.map((l) => {
    const cls = l.key === currentPage ? "nav__link nav__link--active" : "nav__link";
    return `<a href="${l.href}" class="${cls}">${l.label}</a>`;
  }).join("");

  return `
    <nav class="nav">
      <div class="wrap nav__inner">
        <a href="/" class="lf-logo" aria-label="LogiFin home">
          <img src="/logifin.png" alt="LogiFin" class="lf-logo__img" />
        </a>
        <div class="nav__links">${links}</div>
        <div class="nav__cta">
          <a href="https://lf.rollingradius.com/" class="btn btn--primary btn--sm">
            Get started
            <span class="btn-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  `;
}

module.exports = renderNav;
