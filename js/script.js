// Boot animation + line reveal
document.addEventListener('DOMContentLoaded', () => {
  const boot = document.getElementById('boot');
  const bootLines = document.getElementById('bootLines');
  const bootProgress = document.getElementById('bootProgress');
  const lines = document.querySelectorAll('.line');

  const bootText = [
    'Hello there...',
    'I am Farbod Mahdian...',
    'You are going to visit my terminal website...',
    'Thank you for your time...',
  ];

  let i = 0;
  function showBootLine() {
    if (i >= bootText.length) {
      bootProgress.style.width = '100%';
      setTimeout(() => {
        boot.style.display = 'none';
        revealLines();
      }, 500);
      return;
    }

    const line = document.createElement('div');
    line.textContent = '';
    bootLines.appendChild(line);

    let j = 0;
    const interval = setInterval(() => {
      line.textContent += bootText[i][j++];
      bootProgress.style.width = `${
        ((i + j / bootText[i].length) / bootText.length) * 100
      }%`;
      if (j >= bootText[i].length) {
        clearInterval(interval);
        i++;
        setTimeout(showBootLine, 200);
      }
    }, 25);
  }

  function revealLines() {
    let idx = 0;
    const revealInterval = setInterval(() => {
      if (idx < lines.length) {
        lines[idx].classList.add('visible');
        idx++;
      } else {
        clearInterval(revealInterval);
      }
    }, 180);
  }

  // Allow skipping the boot
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      boot.style.display = 'none';
      revealLines();
    }
  });

  showBootLine();
});
