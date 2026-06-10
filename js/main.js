/* =========================================================================
   main.js — global UI: theme toggle, mobile nav, sticky-header state,
   back-to-top. View switching / reveals / counters live in router.js;
   search lives in search.js.
   ========================================================================= */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------- Theme toggle -- */
  var themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ------------------------------------------------------- Mobile nav -- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  function closeNav() {
    if (!nav) return;
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.querySelector('i').className = 'fa-solid fa-bars';
  }
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
    // Close the drawer after a route link is tapped.
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  }

  /* -------------------------------------------- Sticky-header + toTop -- */
  var header = document.getElementById('siteHeader');
  var toTop = document.getElementById('toTop');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 8);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  });
  // Re-evaluate header/toTop state whenever the route changes (views reset scroll).
  document.addEventListener('route:changed', onScroll);
  onScroll();
})();
