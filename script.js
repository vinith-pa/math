"use strict";
const random = Math.floor(Math.random() * 90);
const active = document.getElementsByClassName("cursor");
const guess = document.getElementsByClassName("guess");
const answer = (random + 9).toString();
let rem = answer;

document.getElementById("number").innerText = random;

function check(input) {
  if (rem.endsWith(input)) {
    active[0].innerText = input;
    rem = answer.slice(0, -1);
    active[0].style.background = "green";
    active[0].classList.toggle("cursor");
    guess[0].classList.toggle("cursor");
  } else {
    active[0].style.background = "red";
    active[0].innerHTML = input;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const numberDelete = document.querySelector("[data-delete]");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(rem);
    check(button.innerText);
  });
});

numberDelete.addEventListener("click", () => {
  location.reload();
});
