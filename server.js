"use strict";

const express = require("express");
const path = require("path");
const layout = require("./components/layout");
const routes = require("./routes");

const app = express();

// Static assets: stylesheet + client-side scripts live in /public
app.use(express.static(path.join(__dirname, "public")));

// Each route maps a clean URL to a page module in /pages.
// A page module exports { title, description, render() } — render()
// returns the page's body markup as a string. The layout wraps it
// with the shared <head>, nav, and footer.

for (const { path: routePath, page } of routes) {
  const mod = require(`./pages/${page}`);
  app.get(routePath, (req, res) => {
    res.send(
      layout({
        title: mod.title,
        description: mod.description,
        page,
        body: mod.render(),
      })
    );
  });
}

// 404 — render through the same layout so it stays on-brand.
app.use((req, res) => {
  res.status(404).send(
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
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`LogiFin running at http://localhost:${PORT}`);
});
