"use strict";

// Selectin the elements
const playerName__0__El = document.getElementById("name--0");
const playerName__1__El = document.getElementById("name--1");

const finalScore__0__El = document.getElementById("score--0");
const finalScore__1__El = document.getElementById("score--1");

const currentScore__0__El = document.getElementById("currentscore--0");
const currentScore__1__El = document.getElementById("currentscore--1");

const dice_El = document.querySelector(".dice");

const roll_Dice = document.querySelector(".btn--roll");
const new_Game = document.querySelector(".btn--new");
const hold_score = document.querySelector(".btn--hold");

const left_box = document.querySelector(".left");
const right_box = document.querySelector(".right");

// Inititial consditions
finalScore__0__El.textContent = 0;
finalScore__1__El.textContent = 0;
dice_El.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;
const finalScores = [0, 0];
roll_Dice.disabled = false;
hold_score.disabled = false;

//Roll the dice and see if it is 1 or nor\t
roll_Dice.addEventListener("click", function () {
  //Generate random number
  let randNum = Math.trunc(Math.random() * 6) + 1;
  console.log(randNum);

  // Remove the hidden class from the dice elemnt and show the dice image based on the generated number
  dice_El.classList.remove("hidden");
  dice_El.src = `img/dice-${randNum}.png`;

  // add the value of the dice to the current score only if its not one
  if (randNum !== 1) {
    currentScore = currentScore + randNum;
    document.getElementById(`currentscore--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch the player
    document.getElementById(`currentscore--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    left_box.classList.toggle("active");
    right_box.classList.toggle("active");
  }
});

hold_score.addEventListener("click", function () {
  // Add the current score to the active player
  finalScores[activePlayer] = finalScores[activePlayer] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScores[activePlayer];
  // Check if the final score is >=100, if yes announce the winner, if no swith the player
  if (finalScores[activePlayer] < 100) {
    document.getElementById(`currentscore--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    left_box.classList.toggle("active");
    right_box.classList.toggle("active");
  } else {
    document.getElementById("the--title").textContent = `the winner is player ${
      activePlayer + 1
    }`;
    roll_Dice.disabled = true;
    hold_score.disabled = true;
  }
});

new_Game.addEventListener("click", function () {
  finalScore__0__El.textContent = 0;
  finalScore__1__El.textContent = 0;
  currentScore__0__El.textContent = 0;
  currentScore__1__El.textContent = 0;
  dice_El.classList.add("hidden");
  let currentScore = 0;
  let activePlayer = 0;
  const finalScores = [0, 0];
  roll_Dice.disabled = false;
  hold_score.disabled = false;
});
