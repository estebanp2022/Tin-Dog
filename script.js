import { dogs } from "./data.js";
import { Dog } from "./Dog.js";

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);
document.getElementById("like").addEventListener("click", yes);
document.getElementById("pass").addEventListener("click", no);
let likeBadge = document.querySelector(".like");
let passBadge = document.querySelector(".pass");

render();

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
  likeBadge.style.display = "none";
  passBadge.style.display = "none";
  currentDogIndex += 1;
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
}

function yes() {
  likeBadge.style.display = "block";
  currentDog.setMatchStatus(true);

  setTimeout(getNewDog, 1000);

  if (currentDogIndex === dogs.length - 1) {
    currentDogIndex -= 3;
  }
}

function no() {
  passBadge.style.display = "block";
  currentDog.setMatchStatus(true);

  setTimeout(getNewDog, 1000);

  if (currentDogIndex === dogs.length - 1) {
    currentDogIndex -= 3;
  }
}
