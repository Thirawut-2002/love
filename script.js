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

  function popHearts() {
    const total = 28;
    for (let i = 0; i < total; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart-bubble';
      heart.textContent = '❤';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${Math.random() * 1.5 + 1.2}rem`;
      heart.style.animationDelay = `${Math.random() * 3}s`;
      heart.style.animationDuration = `${Math.random() * 4 + 5}s`;
      field.appendChild(heart);
    }
  }

  popHearts();

  setInterval(() => {
    const hearts = document.querySelectorAll('.heart-bubble');
    hearts.forEach((heart, index) => {
      if (index % 3 === 0) {
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = '0s';
      }
    });
  }, 5000);
}

if (document.querySelector('.heart')) {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((heart, index) => {
    heart.style.filter = `hue-rotate(${index * 10}deg)`;
  });
}
