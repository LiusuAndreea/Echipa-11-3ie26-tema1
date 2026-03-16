// ── Hamburger Menu ──
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // ── Menu Tabs ──
  const tabs = document.querySelectorAll('.menu-tab');
  const categories = document.querySelectorAll('.menu-category');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      categories.forEach(cat => {
        cat.classList.toggle('active', cat.id === target);
      });
    });
  });

  // ── Contact Form ──
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (successMsg) {
        successMsg.style.display = 'block';
      }
      form.reset();
      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
      }, 4000);
    });
  }

  // ── Active nav link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
