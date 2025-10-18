let homeTeam = "Guava";
let guestTeam = "pineapple";
document.getElementById("home-team").textContent = homeTeam;
document.getElementById("guest-team").textContent = guestTeam;

let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function homeAdd(n) {
  homeScore.innerText = Number(homeScore.innerText) + n;
}
function guestAdd(n) {
  guestScore.innerText = Number(guestScore.innerText) + n;
}
function newGame() {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
}
