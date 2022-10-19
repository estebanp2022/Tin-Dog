import { dogs } from "./data.js";
import { Dog } from "./dogs.js";

const likeBtn = document.getElementById("like");
const passBtn = document.getElementById("pass");

likeBtn.addEventListener("click", function () {
  console.log("like is working!");
});

passBtn.addEventListener("click", function () {
  console.log("pass is working!");
});

new Dog(dogs);
