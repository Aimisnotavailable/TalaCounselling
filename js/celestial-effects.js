(() => {
  const canvas = document.getElementById('starfield-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let stars = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initStars();
  }

  function initStars() {
    const count = Math.floor((width * height) / 13000);
    stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.18 + 0.06,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      ctx.beginPath();
      const opac = Math.min(
        star.opacity + Math.sin(Date.now() * 0.002 + star.x) * 0.012,
        0.22
      );
      ctx.fillStyle = `rgba(215,187,163,${opac})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();