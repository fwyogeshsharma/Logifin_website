"use strict";

// Prerenders the site to static HTML for Netlify (or any static host).
// Every page is rendered deterministically from JS modules with no
// per-request data, so we can render each route once at build time and
// ship plain files instead of running Express in production.

const fs = require("fs");
const path = require("path");
const layout = require("./components/layout");
const routes = require("./routes");

const OUT_DIR = path.join(__dirname, "dist");
const PUBLIC_DIR = path.join(__dirname, "public");

function writeHtml(relPath, html) {
  const filePath = path.join(OUT_DIR, relPath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html);
  console.log(`  ${relPath}`);
}

// Map a clean URL to a static file. "/" -> index.html; "/about" ->
// about/index.html so the clean URL resolves without any redirect rules.
function outputPathFor(routePath) {
  if (routePath === "/") return "index.html";
  return `${routePath.replace(/^\//, "")}/index.html`;
}

function build() {
  // Start from a clean output directory.
  fs.rmSync(OUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Copy static assets (styles, scripts, images) to the publish root.
  fs.cpSync(PUBLIC_DIR, OUT_DIR, { recursive: true });

  console.log("Rendering pages:");
  for (const { path: routePath, page } of routes) {
    const mod = require(`./pages/${page}`);
    const html = layout({
      title: mod.title,
      description: mod.description,
      page,
      body: mod.render(),
    });
    writeHtml(outputPathFor(routePath), html);
  }

  // 404 page — Netlify serves /404.html automatically for unknown paths.
  writeHtml(
    "404.html",
    layout({
      title: "Not found — LogiFin",
      description: "The page you were looking for doesn't exist.",
      page: "",
      body: `
        <section class="section bg-soft" style="padding-top: 120px; padding-bottom: 120px;">
          <div class="wrap" style="max-width: 680px; text-align: center;">
            <span class="eyebrow" style="justify-content: center;">404</span>
            <h1 class="h-display h-display-xl" style="margin-top: 14px;">Page not found.</h1>
            <p class="lede lede--center" style="margin-top: 24px;">That route isn't on the network. Let's get you back on the road.</p>
            <div style="margin-top: 32px;"><a href="/" class="btn btn--accent btn--lg">Back home</a></div>
          </div>
        </section>`,
    })
  );

  console.log(`\nDone. Static site written to ${path.relative(__dirname, OUT_DIR)}/`);
}

build();
