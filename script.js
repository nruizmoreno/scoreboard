let scoreHome = document.querySelector(".home-score");
let scoreGuest = document.querySelector(".guest-score");
let score1 = 0;
let score2 = 0;

let homeScreen = document.getElementById("home-screen");
let guestScreen = document.getElementById("guest-screen");

function add1Home() {
  score1 += 1;
  scoreHome.textContent = score1;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function add2Home() {
  score1 += 2;
  scoreHome.textContent = score1;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function add3Home() {
  score1 += 3;
  scoreHome.textContent = score1;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function add1Guest() {
  score2 += 1;
  scoreGuest.textContent = score2;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function add2Guest() {
  score2 += 2;
  scoreGuest.textContent = score2;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function add3Guest() {
  score2 += 3;
  scoreGuest.textContent = score2;
  if (score1 > score2) {
    homeScreen.classList.add("winner");
    guestScreen.classList.remove("winner");
  } else if (score1 < score2) {
    homeScreen.classList.remove("winner");
    guestScreen.classList.add("winner");
  } else {
    homeScreen.classList.remove("winner");
    guestScreen.classList.remove("winner");
  }
}
function newGame() {
  score1 = 0;
  score2 = 0;
  scoreHome.textContent = score1;
  scoreGuest.textContent = score2;
  homeScreen.classList.remove("winner");
  guestScreen.classList.remove("winner");
}
