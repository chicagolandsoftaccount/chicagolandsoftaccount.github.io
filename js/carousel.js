/* =========================================================================
   carousel.js — manual (no autoplay) image carousels for project cards that
   have two or more screenshots. render.js emits the markup; this file wires
   the prev/next arrows and dots via event delegation, so it works with cards
   injected after load. The active <img> stays clickable for the lightbox.
   ========================================================================= */
(function () {
  'use strict';

  function imgs(car) { return car.querySelectorAll('.carousel-img'); }
  function dots(car) { return car.querySelectorAll('.carousel-dot'); }

  function show(car, idx) {
    var is = imgs(car), ds = dots(car), n = is.length;
    if (!n) return;
    idx = ((idx % n) + n) % n;                 // wrap around
    for (var i = 0; i < n; i++) {
      is[i].classList.toggle('is-active', i === idx);
      if (ds[i]) {
        ds[i].classList.toggle('is-active', i === idx);
        ds[i].setAttribute('aria-current', i === idx ? 'true' : 'false');
      }
    }
    car.setAttribute('data-idx', idx);
  }

  function cur(car) { return parseInt(car.getAttribute('data-idx') || '0', 10); }

  document.addEventListener('click', function (e) {
    var prev = e.target.closest('.carousel-prev');
    if (prev) { var c = prev.closest('.proj-carousel'); show(c, cur(c) - 1); return; }

    var next = e.target.closest('.carousel-next');
    if (next) { var c2 = next.closest('.proj-carousel'); show(c2, cur(c2) + 1); return; }

    var dot = e.target.closest('.carousel-dot');
    if (dot) {
      var c3 = dot.closest('.proj-carousel');
      show(c3, Array.prototype.indexOf.call(dots(c3), dot));
    }
  });
})();
