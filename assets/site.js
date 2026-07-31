// Stateline Campground — shared interactions
(function () {
  var nav = document.getElementById('nav');
  var solid = nav && nav.classList.contains('solid');
  if (nav && !solid) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 50); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobileMenu');
  var scrim = document.getElementById('scrim');
  function close() {
    if (!menu) return;
    menu.classList.remove('open');
    scrim.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      scrim.classList.toggle('show', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    scrim.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  }

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
