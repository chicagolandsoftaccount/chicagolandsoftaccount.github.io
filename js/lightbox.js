/* =========================================================================
   lightbox.js — click any project screenshot (banner or thumbnail) to view
   the full, uncropped image in an overlay. When the screenshot belongs to a
   multi-image carousel, the overlay gets its own ‹ / › buttons (and arrow
   keys) so you can page through the whole set. Close via the × button, a click
   outside the image, or Esc. Uses event delegation so it works with the cards
   render.js injects.
   ========================================================================= */
(function () {
  'use strict';
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lightboxImg');
  var cap = document.getElementById('lightboxCaption');
  var closeBtn = document.getElementById('lightboxClose');
  var prevBtn = document.getElementById('lightboxPrev');
  var nextBtn = document.getElementById('lightboxNext');
  if (!lb || !img) return;

  var items = [];   // [{ src, alt }]
  var pos = 0;

  function caption(alt) { return (alt || '').replace(/ screenshot.*$/, ''); }

  function render() {
    var it = items[pos]; if (!it) return;
    img.src = it.src;
    img.alt = it.alt || '';
    cap.textContent = caption(it.alt);
    var multi = items.length > 1;
    if (prevBtn) prevBtn.hidden = !multi;
    if (nextBtn) nextBtn.hidden = !multi;
  }

  function go(delta) {
    if (items.length < 2) return;
    pos = (pos + delta + items.length) % items.length;
    render();
  }

  function open() {
    render();
    lb.removeAttribute('hidden');
    document.body.classList.add('no-scroll');
    requestAnimationFrame(function () { lb.classList.add('open'); });
  }
  function close() {
    lb.classList.remove('open');
    document.body.classList.remove('no-scroll');
    setTimeout(function () { lb.setAttribute('hidden', ''); img.src = ''; }, 200);
  }

  // Open when a project image is clicked (ignore the carousel's own controls).
  document.addEventListener('click', function (e) {
    if (e.target.closest('.carousel-btn, .carousel-dot')) return;
    var hit = e.target.closest('.proj-thumb img, .proj-banner img');
    if (!hit) return;
    var car = hit.closest('.proj-carousel');
    if (car) {
      var imgs = Array.prototype.slice.call(car.querySelectorAll('.carousel-img'));
      items = imgs.map(function (im) {
        return { src: im.getAttribute('src'), alt: im.getAttribute('alt') };
      });
      pos = imgs.indexOf(hit);
      if (pos < 0) pos = 0;
    } else {
      items = [{ src: hit.getAttribute('src'), alt: hit.getAttribute('alt') }];
      pos = 0;
    }
    open();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', function (e) { e.stopPropagation(); go(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function (e) { e.stopPropagation(); go(1); });

  // Click anywhere except the image (or the nav arrows) closes it.
  lb.addEventListener('click', function (e) {
    if (e.target.closest('.lightbox-nav')) return;
    if (e.target.id !== 'lightboxImg') close();
  });
  document.addEventListener('keydown', function (e) {
    if (lb.hasAttribute('hidden')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  });
})();
