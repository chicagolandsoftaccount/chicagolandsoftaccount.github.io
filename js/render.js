/* =========================================================================
   render.js — builds the page from the data/*.js globals (PROFILE,
   EXPERIENCE, PROJECTS, SKILLS). Content is static and author-trusted, so
   template-literal innerHTML is fine here. Runs before main.js wires up
   interactions (counters, reveal-on-scroll, scrollspy).

   Layout is intentionally editorial: a hero lockup + figure strip, résumé
   rows, a project catalogue (one feature spread + an indexed list), and
   typographic skill lists. Tags render as plain text, not chips, which also
   keeps the markup clean for applicant-tracking systems.
   ========================================================================= */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return ('0' + n).slice(-2); };

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
    if (p.now && $('heroNow')) $('heroNow').textContent = p.now;

    $('heroStats').innerHTML = (p.stats || []).map(function (s) {
      var pre = s.prefix || '', suf = s.suffix || '';
      return '' +
        '<li class="figure">' +
          '<span class="figure-num num" data-count="' + s.value + '" data-prefix="' + pre + '" data-suffix="' + suf + '">' + pre + '0' + suf + '</span>' +
          '<span class="figure-lbl">' + s.label + '</span>' +
        '</li>';
    }).join('');
  }

  /* --------------------------------------------------------------- About */
  function renderAbout() {
    var p = window.PROFILE; if (!p) return;
    $('aboutText').innerHTML = (p.about || []).map(function (para, i) {
      return '<p' + (i === 0 ? ' class="lead"' : '') + '>' + para + '</p>';
    }).join('');
    $('aboutEducation').innerHTML = (p.education || []).map(function (e) {
      return '' +
        '<li class="edu-item">' +
          '<span class="edu-school">' + e.school + '</span>' +
          '<span class="edu-detail">' + e.detail + '</span>' +
          '<span class="edu-year">' + e.year + '</span>' +
        '</li>';
    }).join('');
  }

  /* ---------------------------------------------------------- Experience */
  function renderExperience() {
    var list = window.EXPERIENCE || [];
    var note = window.PROFILE && window.PROFILE.experienceNote;
    if (note && $('timelineNote')) $('timelineNote').textContent = note;
    $('timeline').innerHTML = list.map(function (x, i) {
      var kind = x.kind === 'volunteer' ? 'volunteer' : 'work';
      var kindLabel = x.kindLabel || (kind === 'volunteer' ? 'Volunteer' : 'Full-time');
      var bullets = (x.highlights || []).map(function (b) { return '<li>' + b + '</li>'; }).join('');
      var tg = (x.tags || []).join('   ·   ');
      return '' +
        '<article class="xp reveal" id="xp-' + i + '">' +
          '<div class="xp-when">' +
            '<span class="xp-dates">' + x.start + ' — ' + x.end + '</span>' +
            '<span class="xp-kind ' + kind + '">' + kindLabel + '</span>' +
          '</div>' +
          '<div class="xp-body">' +
            '<h3 class="xp-role">' + x.role + ' <span class="xp-org">' + x.org + '</span></h3>' +
            '<span class="xp-loc">' + x.location + '</span>' +
            (x.summary ? '<p class="xp-summary">' + x.summary + '</p>' : '') +
            (bullets ? '<ul class="xp-list">' + bullets + '</ul>' : '') +
            (tg ? '<p class="xp-tags">' + tg + '</p>' : '') +
          '</div>' +
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
               (x.linkLabel || 'View') + ' <span aria-hidden="true">↗</span></a>';
    }
    var note = x.note ? '<span class="proj-note">' + x.note + '</span>' : '';
    if (!link && !note) return '';
    return '<div class="proj-foot">' + note + link + '</div>';
  }

  // Build the screenshot media for a card. One image renders as a plain
  // <img>; two or more become a manual (no autoplay) carousel. Either way the
  // <img>s stay inside .proj-banner / .proj-thumb so the lightbox still works.
  function projectMedia(x, wrapClass) {
    var imgs = (x.images && x.images.length) ? x.images : (x.image ? [x.image] : []);
    if (!imgs.length) return '';
    if (imgs.length === 1) {
      return '<div class="' + wrapClass + '"><img src="' + imgs[0] + '" alt="' + x.name +
             ' screenshot" loading="lazy"></div>';
    }
    var slides = imgs.map(function (src, j) {
      return '<img class="carousel-img' + (j === 0 ? ' is-active' : '') + '" src="' + src +
             '" alt="' + x.name + ' screenshot ' + (j + 1) + '" loading="lazy">';
    }).join('');
    var dots = imgs.map(function (src, j) {
      return '<button type="button" class="carousel-dot' + (j === 0 ? ' is-active' : '') +
             '" aria-label="Show image ' + (j + 1) + '"></button>';
    }).join('');
    return '' +
      '<div class="' + wrapClass + ' proj-carousel" data-idx="0">' +
        '<div class="carousel-track">' + slides + '</div>' +
        '<button type="button" class="carousel-btn carousel-prev" aria-label="Previous image">‹</button>' +
        '<button type="button" class="carousel-btn carousel-next" aria-label="Next image">›</button>' +
        '<div class="carousel-dots">' + dots + '</div>' +
      '</div>';
  }

  function renderProjects() {
    var list = window.PROJECTS || [];
    $('projectsGrid').innerHTML = list.map(function (x, i) {
      var idx = pad(i + 1);
      var blurb = '<p class="proj-blurb">' + x.blurb + '</p>';
      var tg = (x.tags || []).length ? '<p class="proj-tags">' + x.tags.join('   ·   ') + '</p>' : '';
      var foot = projectFooter(x);

      if (x.featured) {
        // One large editorial spread: full image, then the write-up + evidence.
        var banner = projectMedia(x, 'proj-banner');
        var bullets = (x.highlights || []).length
          ? '<ul class="proj-list">' + x.highlights.map(function (b) { return '<li>' + b + '</li>'; }).join('') + '</ul>'
          : '';
        return '' +
          '<article class="proj-feature reveal" id="proj-' + i + '">' +
            banner +
            '<div class="proj-feature-text">' +
              '<span class="proj-idx">Flagship — ' + idx + '</span>' +
              '<h3 class="proj-title">' + x.name + '</h3>' +
              blurb + bullets + tg + foot +
            '</div>' +
          '</article>';
      }

      // Everything else: an indexed catalogue row.
      var thumb = projectMedia(x, 'proj-row-media proj-thumb');
      return '' +
        '<article class="proj-row reveal" id="proj-' + i + '">' +
          '<div class="proj-row-idx">' + idx + '</div>' +
          '<div class="proj-row-main">' +
            '<h3 class="proj-title">' + x.name + '</h3>' +
            blurb + tg + foot +
          '</div>' +
          thumb +
        '</article>';
    }).join('');
  }

  /* -------------------------------------------------------------- Skills */
  function renderSkills() {
    var list = window.SKILLS || [];
    $('skillsGrid').innerHTML = list.map(function (g, i) {
      return '' +
        '<div class="skill reveal" id="skill-' + i + '">' +
          '<h3 class="skill-cat">' + g.group + '</h3>' +
          '<p class="skill-items">' + (g.items || []).join(', ') + '</p>' +
        '</div>';
    }).join('');
  }

  /* ----------------------------------------------- Contact + footer ---- */
  function renderContact() {
    var p = window.PROFILE; if (!p) return;
    var email = p.links.emailUser + '@' + p.links.emailDomain;     // assembled, not in markup
    var mailto = 'mailto:' + email;

    $('contactActions').innerHTML = '' +
      '<a class="contact-email" href="' + mailto + '">' + email + '</a>' +
      '<div class="contact-links">' +
        '<a href="' + p.links.linkedin + '" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">↗</span></a>' +
        '<a href="' + p.links.github + '" target="_blank" rel="noopener">GitHub <span aria-hidden="true">↗</span></a>' +
      '</div>';

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
