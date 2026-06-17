(() => {
  // Set current year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger-btn');
  const mobilePanel = document.getElementById('mobile-nav-panel');

  if (hamburger && mobilePanel) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isOpen);
      mobilePanel.setAttribute('aria-hidden', isOpen);
    });

    // Close mobile nav when a link is clicked
    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobilePanel.setAttribute('aria-hidden', 'true');
      });
    });
  }
})();