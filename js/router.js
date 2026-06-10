/* =========================================================================
   router.js — tiny hash-based client router. Each <section data-view="x">
   is a "page"; only the active one is shown. Handles nav highlighting,
   document title, scroll reset, per-view reveal + counter animations, and
   back/forward via hashchange. Exposes window.Router.go(route, anchorId)
   so the search overlay can deep-link into a view.
   ========================================================================= */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var views = {}, navLinks = {}, order = [];
  var titleBase = document.title;
  var pendingAnchor = null;

  function collect() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-view]'), function (v) {
      var name = v.getAttribute('data-view');
      views[name] = v; order.push(name);
    });
    Array.prototype.forEach.call(document.querySelectorAll('#primaryNav a[data-route]'), function (a) {
      navLinks[a.getAttribute('href').replace('#', '')] = a;
    });
  }

  function currentRoute() {
    var h = (location.hash || '').replace(/^#\/?/, '').split('/')[0];
    return views[h] ? h : 'home';
  }

  /* Count-up animation (per-view, replays on each visit) */
  function animateCount(elm) {
    var target = parseFloat(elm.getAttribute('data-count')) || 0;
    var pre = elm.getAttribute('data-prefix') || '';
    var suf = elm.getAttribute('data-suffix') || '';
    if (prefersReduced) { elm.textContent = pre + target + suf; return; }
    var dur = 1200, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      elm.textContent = pre + Math.round(target * eased) + suf;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function replayReveals(view) {
    var reveals = view.querySelectorAll('.reveal');
    if (prefersReduced) {
      Array.prototype.forEach.call(reveals, function (r) { r.classList.add('in'); });
    } else {
      Array.prototype.forEach.call(reveals, function (r) { r.classList.remove('in'); });
      void view.offsetWidth; // force reflow so the transition replays
      requestAnimationFrame(function () {
        Array.prototype.forEach.call(reveals, function (r) { r.classList.add('in'); });
      });
    }
    Array.prototype.forEach.call(view.querySelectorAll('.num[data-count]'), animateCount);
  }

  function flash(anchorId) {
    var el = document.getElementById(anchorId);
    if (!el) return;
    requestAnimationFrame(function () {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
      el.classList.add('flash');
      setTimeout(function () { el.classList.remove('flash'); }, 1700);
    });
  }

  function show(name) {
    name = views[name] ? name : 'home';
    order.forEach(function (n) {
      var active = n === name;
      views[n].classList.toggle('active', active);
      if (active) views[n].removeAttribute('hidden'); else views[n].setAttribute('hidden', '');
    });
    Object.keys(navLinks).forEach(function (n) {
      navLinks[n].classList.toggle('active', n === name);
      if (n === name) navLinks[n].setAttribute('aria-current', 'page');
      else navLinks[n].removeAttribute('aria-current');
    });
    document.title = (name === 'home' ? '' : name.charAt(0).toUpperCase() + name.slice(1) + ' · ') + titleBase;

    window.scrollTo(0, 0);
    replayReveals(views[name]);

    if (pendingAnchor) { flash(pendingAnchor); pendingAnchor = null; }
    document.dispatchEvent(new CustomEvent('route:changed', { detail: { route: name } }));
  }

  function go(route, anchorId) {
    pendingAnchor = anchorId || null;
    if (currentRoute() === route) show(route);     // already here → re-show (applies anchor)
    else location.hash = '#' + route;              // triggers hashchange → show()
  }

  function init() {
    collect();
    window.addEventListener('hashchange', function () { show(currentRoute()); });
    show(currentRoute());
  }

  window.Router = { go: go, current: currentRoute };

  if (window.__rendered) init();
  else document.addEventListener('content:rendered', init);
})();
