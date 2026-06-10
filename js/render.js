/* =========================================================================
   render.js — builds the page from the data/*.js globals (PROFILE,
   EXPERIENCE, PROJECTS, SKILLS). Content is static and author-trusted, so
   template-literal innerHTML is fine here. Runs before main.js wires up
   interactions (counters, reveal-on-scroll, scrollspy).
   ========================================================================= */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  function tags(list) { return (list || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join(''); }

  /* ---------------------------------------------------------------- Hero */
  function renderHero() {
    var p = window.PROFILE; if (!p) return;
    $('heroName').textContent = p.name;
    $('heroRole').textContent = p.role;
    $('heroTagline').textContent = p.tagline;
    $('heroLocation').textContent = p.location;
    if (p.available && $('heroAvailable')) $('heroAvailable').textContent = p.available;
    $('heroGithub').href = p.links.github;
    $('heroLinkedin').href = p.links.linkedin;
    if (p.now && $('heroNow')) $('heroNow').innerHTML = '<i class="fa-solid fa-circle-dot"></i> ' + p.now;

    $('heroStats').innerHTML = (p.stats || []).map(function (s) {
      var pre = s.prefix || '', suf = s.suffix || '';
      return '' +
        '<div class="stat">' +
          '<div class="num" data-count="' + s.value + '" data-prefix="' + pre + '" data-suffix="' + suf + '">' + pre + '0' + suf + '</div>' +
          '<div class="lbl">' + s.label + '</div>' +
        '</div>';
    }).join('');
  }

  /* --------------------------------------------------------------- About */
  function renderAbout() {
    var p = window.PROFILE; if (!p) return;
    $('aboutText').innerHTML = (p.about || []).map(function (para) { return '<p>' + para + '</p>'; }).join('');
    $('aboutEducation').innerHTML = (p.education || []).map(function (e) {
      return '' +
        '<div class="edu-item">' +
          '<div class="school">' + e.school + '</div>' +
          '<div class="detail"><span>' + e.detail + '</span><span>' + e.year + '</span></div>' +
        '</div>';
    }).join('');
  }

  /* ---------------------------------------------------------- Experience */
  function renderExperience() {
    var list = window.EXPERIENCE || [];
    var note = window.PROFILE && window.PROFILE.experienceNote;
    if (note && $('timelineNote')) $('timelineNote').innerHTML = '<i class="fa-solid fa-circle-info"></i> ' + note;
    $('timeline').innerHTML = list.map(function (x, i) {
      var kind = x.kind === 'volunteer' ? 'volunteer' : 'work';
      var kindLabel = kind === 'volunteer' ? 'Volunteer' : 'Full-time';
      var bullets = (x.highlights || []).map(function (b) { return '<li>' + b + '</li>'; }).join('');
      return '' +
        '<article class="xp-card reveal' + (i % 2 ? ' d1' : '') + '" id="xp-' + i + '">' +
          '<div class="xp-top">' +
            '<h3 class="xp-role">' + x.role + ' · <span class="xp-org">' + x.org + '</span></h3>' +
            '<span class="xp-dates">' + x.start + ' — ' + x.end + '</span>' +
          '</div>' +
          '<div class="xp-meta">' +
            '<span class="badge-kind ' + kind + '">' + kindLabel + '</span>' +
            '<span class="xp-loc">' + x.location + '</span>' +
          '</div>' +
          (x.summary ? '<p class="xp-summary">' + x.summary + '</p>' : '') +
          (bullets ? '<ul class="xp-list">' + bullets + '</ul>' : '') +
          '<div class="tags">' + tags(x.tags) + '</div>' +
        '</article>';
    }).join('');
  }

  /* ------------------------------------------------------------ Projects */
  function projectFooter(x) {
    var link = '';
    if (x.link) {
      var external = /^https?:/.test(x.link);
      var attrs = external ? ' target="_blank" rel="noopener"' : '';
      link = '<a class="proj-link" href="' + x.link + '"' + attrs + '>' +
               (x.linkLabel || 'View') + ' <i class="fa-solid fa-arrow-up-right-from-square"></i></a>';
    }
    var note = x.note ? '<span class="proj-note">' + x.note + '</span>' : '';
    if (!link && !note) return '';
    return '<div class="proj-foot">' + note + link + '</div>';
  }

  function renderProjects() {
    var list = window.PROJECTS || [];
    $('projectsGrid').innerHTML = list.map(function (x, i) {
      var accent = x.accent || 'teal';
      var icon = '<div class="proj-icon ' + accent + '"><i class="' + (x.icon || 'fa-solid fa-cube') + '"></i></div>';
      var flag = x.featured ? '<span class="proj-flag">Flagship project</span>' : '';
      var head = '<div class="proj-head">' + icon +
                 '<div>' + flag + '<h3 class="proj-title">' + x.name + '</h3></div></div>';
      var blurb = '<p class="proj-blurb">' + x.blurb + '</p>';
      var bullets = (x.highlights && x.highlights.length)
        ? '<ul class="proj-list">' + x.highlights.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>'
        : '';
      var tagHtml = '<div class="tags">' + tags(x.tags) + '</div>';
      var foot = projectFooter(x);

      if (x.featured) {
        // Two-column showcase: blurb + tags on the left, highlights (or a
        // screenshot, if provided) on the right.
        var rightCol = x.image
          ? '<div class="proj-shot"><img src="' + x.image + '" alt="' + x.name + ' screenshot" loading="lazy"></div>'
          : bullets;
        return '' +
          '<article class="proj-card featured reveal" id="proj-' + i + '">' +
            head +
            '<div class="proj-body">' +
              '<div>' + blurb + tagHtml + '</div>' +
              '<div>' + rightCol + '</div>' +
            '</div>' +
            foot +
          '</article>';
      }

      var delay = (i % 2) ? ' d1' : '';
      return '' +
        '<article class="proj-card reveal' + delay + '" id="proj-' + i + '">' +
          head + blurb + bullets + tagHtml + foot +
        '</article>';
    }).join('');
  }

  /* -------------------------------------------------------------- Skills */
  function renderSkills() {
    var list = window.SKILLS || [];
    $('skillsGrid').innerHTML = list.map(function (g, i) {
      return '' +
        '<div class="skill-group reveal' + (i % 2 ? ' d1' : '') + '" id="skill-' + i + '">' +
          '<h3><i class="' + (g.icon || 'fa-solid fa-code') + '"></i> ' + g.group + '</h3>' +
          '<div class="tags">' + tags(g.items) + '</div>' +
        '</div>';
    }).join('');
  }

  /* ----------------------------------------------- Contact + footer ---- */
  function renderContact() {
    var p = window.PROFILE; if (!p) return;
    var email = p.links.emailUser + '@' + p.links.emailDomain;     // assembled, not in markup
    var mailto = 'mailto:' + email;

    $('contactActions').innerHTML = '' +
      '<a class="btn-x primary" href="' + mailto + '"><i class="fa-solid fa-envelope"></i> ' + email + '</a>' +
      '<a class="btn-x ghost" href="' + p.links.linkedin + '" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>' +
      '<a class="btn-x ghost" href="' + p.links.github + '" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>';

    $('footerSocial').innerHTML = '' +
      '<a href="' + mailto + '" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>' +
      '<a href="' + p.links.github + '" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>' +
      '<a href="' + p.links.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>';

    var yr = $('year'); if (yr) yr.textContent = new Date().getFullYear();
  }

  function init() {
    renderHero();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderContact();
    window.__rendered = true;
    document.dispatchEvent(new CustomEvent('content:rendered'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
