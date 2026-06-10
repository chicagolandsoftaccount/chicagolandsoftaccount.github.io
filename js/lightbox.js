/* =========================================================================
   lightbox.js — click any project screenshot (banner or thumbnail) to view
   the full, uncropped image in an overlay. Close via the × button, a click
   outside the image, or Esc. Uses event delegation so it works with the
   cards render.js injects.
   ========================================================================= */
(function () {
  'use strict';
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var cap = document.getElementById('lightboxCaption');
  var closeBtn = document.getElementById('lightboxClose');
  if (!lb || !img) return;

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    cap.textContent = (alt || '').replace(/ screenshot$/, '');
    lb.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
    requestAnimationFrame(function () { lb.classList.add('open'); });
  }
  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { lb.setAttribute('hidden', ''); img.src = ''; }, 200);
  }

  // Open when a project image is clicked.
  document.addEventListener('click', function (e) {
    var hit = e.target.closest('.proj-thumb img, .proj-banner img');
    if (hit) { open(hit.getAttribute('src'), hit.getAttribute('alt')); }
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  // Click anywhere except the image closes it.
  lb.addEventListener('click', function (e) { if (e.target.id !== 'lightboxImg') close(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lb.hasAttribute('hidden')) close();
  });
})();
