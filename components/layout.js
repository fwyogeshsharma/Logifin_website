"use strict";

const renderNav = require("./nav");
const renderFooter = require("./footer");

// Wraps a page's body markup in the full HTML document: shared <head>,
// nav, footer, and the client-side reveal-on-scroll script.
function layout({ title, description, page, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${description}" />
<link rel="icon" type="image/png" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
<link rel="shortcut icon" type="image/png" href="/favicon.png" />
<link rel="stylesheet" href="/styles.css" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
<body data-page="${page}">
${renderNav(page)}
${body}
${renderFooter()}
<script src="/reveal.js"></script>
</body>
</html>`;
}

module.exports = layout;
