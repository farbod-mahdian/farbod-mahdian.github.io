document.addEventListener('DOMContentLoaded', () => {
  const lines = document.querySelectorAll('.line');

  let idx = 0;
  const revealInterval = setInterval(() => {
    if (idx < lines.length) {
      lines[idx].classList.add('visible');
      idx++;
    } else {
      clearInterval(revealInterval);
    }
  }, 180);
});
