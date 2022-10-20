import { dogs } from "./data.js";
import { Dog } from "./Dog.js";

let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);
document.getElementById("like").addEventListener("click", yes);

render();

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
  currentDogIndex += 1;
  currentDog = new Dog(dogs[currentDogIndex]);
  render();
}

function yes() {
  currentDog.setMatchStatus(true);
  getNewDog();
}
