"use strict";

// Single source of truth for the site's routes, shared by the Express
// server (server.js) and the static build (build.js). Each entry maps a
// clean URL to a page module in /pages.
module.exports = [
  { path: "/", page: "index" },
  { path: "/how-it-works", page: "how-it-works" },
  { path: "/shippers", page: "shippers" },
  { path: "/fleets", page: "fleets" },
  { path: "/lenders", page: "lenders" },
  { path: "/about", page: "about" },
];
