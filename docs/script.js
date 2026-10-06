const page = document.body.dataset.page;

if (page === 'landing') {
  const url = 'https://thirawut-2002.github.io/love/celebration.html';

  if (window.QRCode) {
    QRCode.toCanvas(document.getElementById('qrCanvas'), url, {
      width: 220,
      margin: 2,
      color: {
        dark: '#4d1534',
        light: '#fff7fb'
      },
      errorCorrectionLevel: 'H'
    }, function (error) {
      if (error) {
        console.error(error);
      }
    });
  }
}

if (page === 'celebration') {
  const field = document.querySelector('.heart-field');
  const container = document.querySelector('.explosion-container');

  setTimeout(() => {
    for (let i = 0; i < 18; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = '❤';

      const angle = (i / 18) * Math.PI * 2;
      const distance = 180 + Math.random() * 120;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.left = '50%';
      particle.style.top = '50%';

      container.appendChild(particle);
    }
  }, 3000);

  setTimeout(() => {
    const createFirework = () => {
      const heart = document.createElement('div');
      heart.className = 'heart-bubble';
      heart.textContent = '❤';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${(Math.random() * 1.2 + 1.1).toFixed(2)}rem`;
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
      heart.style.animationDuration = `${(Math.random() * 2 + 4).toFixed(2)}s`;
      field.appendChild(heart);

      setTimeout(() => {
        if (field.children.length > 50) {
          field.removeChild(field.firstChild);
        }
      }, 8000);
    };

    for (let i = 0; i < 12; i++) {
      setTimeout(createFirework, i * 180);
    }

    setInterval(createFirework, 600);
  }, 5000);
}
