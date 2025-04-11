function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '♥';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';

  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
