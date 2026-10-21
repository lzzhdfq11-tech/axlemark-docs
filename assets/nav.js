/* Mobile navigation toggle. The menu stays fully visible when JavaScript is off. */
(function () {
  document.documentElement.classList.add('js');
  document.addEventListener('DOMContentLoaded', function () {
    /* "On this page" starts collapsed on small screens and stays open on wide screens. */
    var toc = document.querySelector('.toc-details');
    if (toc && window.matchMedia('(max-width: 999px)').matches) toc.removeAttribute('open');
    if (toc) {
      toc.querySelector('summary').addEventListener('click', function (event) {
        if (window.matchMedia('(min-width: 1000px)').matches) event.preventDefault();
      });
    }

    var nav = document.querySelector('.site-nav');
    var button = document.querySelector('.nav-toggle');
    if (!nav || !button) return;
    nav.setAttribute('data-open', 'false');
    button.addEventListener('click', function () {
      var open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      nav.setAttribute('data-open', String(!open));
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
        nav.setAttribute('data-open', 'false');
        button.focus();
      }
    });
  });
})();
