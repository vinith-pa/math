"use strict";

window.addEventListener("keydown", check);

const firstDigit = document.getElementById("firstDigit");
const secondDigit = document.getElementById("secondDigit");

const checkNumber = (input) => {
  if (Number(input)) {
    return Number(input);
  }
};

function check(input) {
  if (checkNumber(input.key) == 7) {
    secondDigit.innerText = input.key;
    secondDigit.style.background = "green";
    secondDigit.classList.toggle("cursor");
    firstDigit.classList.toggle("cursor");
  }
}
