/* Client-side reveal-on-scroll using IntersectionObserver.
   The nav/footer are now rendered server-side, so this is the only
   browser-side behavior left from the old chrome.js. */
(function () {
  function setupReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", setupReveal);
})();
