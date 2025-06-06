function showWish() {
  document.getElementById('popup').classList.remove('hidden');
}

function closeWish() {
  document.getElementById('popup').classList.add('hidden');
}

function playMusic() {
  const music = document.getElementById('bgMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
