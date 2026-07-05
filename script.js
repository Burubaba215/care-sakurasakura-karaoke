const player = document.querySelector("#player");
const playFromStartButton = document.querySelector("#play-from-start-button");
const resetButton = document.querySelector("#reset-button");

playFromStartButton.addEventListener("click", () => {
  player.currentTime = 0;
  player.play();
});

resetButton.addEventListener("click", () => {
  player.pause();
  player.currentTime = 0;
});
