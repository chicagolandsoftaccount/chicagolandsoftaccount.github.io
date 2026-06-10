/* =========================================================================
   search.js — client-side search over the content data globals (PROFILE,
   EXPERIENCE, PROJECTS, SKILLS). Replaces the old Google Custom Search.
   Opens with the header button, "/", or Cmd/Ctrl+K. Results deep-link into
   the SPA via window.Router.go(route, anchorId).
   ========================================================================= */
(function () {
  'use strict';

  var overlay = document.getElementById('searchOverlay');
  var input = document.getElementById('searchInput');
  var resultsEl = document.getElementById('searchResults');
  var openBtn = document.getElementById('searchOpen');
  var closeBtn = document.getElementById('searchClose');
  if (!overlay || !input || !resultsEl) return;

  var index = [];
  var current = [];     // currently displayed results
  var activeIdx = -1;

  /* ------------------------------------------------------- Build index */
  function add(type, title, subtitle, route, anchor, parts) {
    index.push({
      type: type, title: title, subtitle: subtitle || '', route: route, anchor: anchor || null,
      hay: (title + ' ' + (subtitle || '') + ' ' + (parts || []).join(' ')).toLowerCase()
    });
  }

  function buildIndex() {
    var P = window.PROFILE, X = window.EXPERIENCE || [], PR = window.PROJECTS || [], SK = window.SKILLS || [];

    if (P) {
      add('Page', 'Home', P.role, 'home', null, [P.name, P.tagline].concat(P.about || []));
      add('Page', 'About & Education', 'Bio and education', 'about', null,
        (P.about || []).concat((P.education || []).map(function (e) { return e.school + ' ' + e.detail; })));
      add('Page', 'Contact', 'Email, LinkedIn, GitHub', 'contact', null, ['email contact hire linkedin github resume']);
    }
    X.forEach(function (x, i) {
      add('Experience', x.role + ' · ' + x.org, x.start + '–' + x.end, 'experience', 'xp-' + i,
        [x.location, x.summary].concat(x.highlights || []).concat(x.tags || []));
    });
    PR.forEach(function (p, i) {
      add('Project', p.name, (p.tags || []).slice(0, 4).join(' · '), 'projects', 'proj-' + i,
        [p.blurb].concat(p.highlights || []).concat(p.tags || []));
    });
    SK.forEach(function (g, i) {
      add('Skills', g.group, (g.items || []).slice(0, 5).join(', '), 'skills', 'skill-' + i, g.items);
    });
  }

  /* ----------------------------------------------------------- Search */
  function score(item, words) {
    var s = 0, title = item.title.toLowerCase();
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      if (item.hay.indexOf(w) === -1) return 0;     // every word must appear (AND)
      if (title.indexOf(w) !== -1) s += 5; else s += 1;
    }
    return s;
  }

  function query(q) {
    q = q.trim().toLowerCase();
    if (!q) {
      // Empty: offer quick jumps (pages + projects)
      return index.filter(function (it) { return it.type === 'Page' || it.type === 'Project'; }).slice(0, 8);
    }
    var words = q.split(/\s+/);
    return index
      .map(function (it) { return { it: it, sc: score(it, words) }; })
      .filter(function (r) { return r.sc > 0; })
      .sort(function (a, b) { return b.sc - a.sc; })
      .slice(0, 9)
      .map(function (r) { return r.it; });
  }

  /* ----------------------------------------------------------- Render */
  function typeIcon(type) {
    return { Page: 'fa-file-lines', Experience: 'fa-briefcase', Project: 'fa-cube', Skills: 'fa-layer-group' }[type] || 'fa-circle';
  }

  function render(list) {
    current = list; activeIdx = list.length ? 0 : -1;
    if (!list.length) {
      resultsEl.innerHTML = '<div class="search-empty">No matches. Try “React”, “security”, “Legacy”, or “Capital”.</div>';
      return;
    }
    resultsEl.innerHTML = list.map(function (it, i) {
      return '' +
        '<button class="search-result' + (i === 0 ? ' active' : '') + '" data-i="' + i + '" type="button">' +
          '<span class="sr-icon"><i class="fa-solid ' + typeIcon(it.type) + '"></i></span>' +
          '<span class="sr-main">' +
            '<span class="sr-title">' + it.title + '</span>' +
            (it.subtitle ? '<span class="sr-sub">' + it.subtitle + '</span>' : '') +
          '</span>' +
          '<span class="sr-type">' + it.type + '</span>' +
        '</button>';
    }).join('');
  }

  function setActive(i) {
    var nodes = resultsEl.querySelectorAll('.search-result');
    if (!nodes.length) return;
    activeIdx = (i + nodes.length) % nodes.length;
    nodes.forEach(function (n, idx) { n.classList.toggle('active', idx === activeIdx); });
    nodes[activeIdx].scrollIntoView({ block: 'nearest' });
  }

  function choose(i) {
    var it = current[i];
    if (!it) return;
    close();
    if (window.Router) window.Router.go(it.route, it.anchor);
    else location.hash = '#' + it.route;
  }

  /* ------------------------------------------------------ Open/close */
  function open() {
    if (!index.length) buildIndex();
    overlay.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
    input.value = '';
    render(query(''));
    requestAnimationFrame(function () { overlay.classList.add('open'); input.focus(); });
  }
  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { overlay.setAttribute('hidden', ''); }, 200);
  }
  function isOpen() { return !overlay.hasAttribute('hidden'); }

  /* --------------------------------------------------------- Wiring */
  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

  input.addEventListener('input', function () { render(query(input.value)); });

  resultsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.search-result');
    if (btn) choose(parseInt(btn.getAttribute('data-i'), 10));
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(activeIdx + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIdx - 1); }
    else if (e.key === 'Enter') { e.preventDefault(); if (activeIdx >= 0) choose(activeIdx); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
  });

  // Global shortcuts: "/" or Cmd/Ctrl+K to open, Esc to close.
  document.addEventListener('keydown', function (e) {
    var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || '')) || e.target.isContentEditable;
    if ((e.key === '/' && !typing && !isOpen()) ||
        ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey))) {
      e.preventDefault(); open();
    } else if (e.key === 'Escape' && isOpen()) {
      close();
    }
  });
})();
