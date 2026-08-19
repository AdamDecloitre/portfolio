(() => {
  const headers = document.querySelectorAll('.site-header');

  headers.forEach(header => {
    const toggle = header.querySelector('.menu-toggle');
    const nav = header.querySelector('nav');

    if (!toggle || !nav) return;

    const closeMenu = () => {
      header.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
    };

    toggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) closeMenu();
    });
  });
})();
