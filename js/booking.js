(() => {
  const overlay = document.getElementById('booking-overlay');
  const triggers = document.querySelectorAll('[data-booking-trigger]');
  // ⚠️ Replace with your real Jane App booking URL
  const BOOKING_URL = 'https://talacounselling.janeapp.com/';

  function openOverlay(e) {
    e.preventDefault();
    overlay.setAttribute('aria-hidden', 'false');
    overlay.removeAttribute('hidden');
    setTimeout(() => {
      window.location.href = BOOKING_URL;
    }, 1800);
  }

  triggers.forEach((el) => el.addEventListener('click', openOverlay));

  overlay.addEventListener('click', (e) => {
    if (
      e.target === overlay ||
      e.target.classList.contains('booking-overlay__backdrop')
    ) {
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('hidden', '');
    }
  });
})();