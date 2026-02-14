const btn = document.getElementById("musicBtn");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});
