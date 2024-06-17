// Copyright (c) 2024 Mr. Coxal All rights reserved
//
// Created by: Tymofii
// Created on: Jun 2024
// This file contains the JS functions for index.html

"use strict"

let randomNumber

window.onload = function () {
  resetGame()
  document.getElementById("reset-game").addEventListener("click", resetGame)
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1
  const numberImagesDiv = document.getElementById("number-images")
  numberImagesDiv.innerHTML = ""

  for (let i = 1; i <= 10; i++) {
    const img = document.createElement("img")
    img.src = `./images/${i}.png`
    img.alt = `Number ${i}`
    img.style.width = "50px"
    img.style.height = "50px"
    img.style.cursor = "pointer"
    img.addEventListener("click", function() {
      checkGuess(i)
    })
    numberImagesDiv.appendChild(img)
  }

  document.getElementById("result").innerHTML = ""
}

function checkGuess(guess) {
  const resultDiv = document.getElementById("result")
  if (guess === randomNumber) {
    resultDiv.innerHTML = `<p>Congratulations! You guessed the number ${guess}.</p>`
  } else {
    resultDiv.innerHTML = `<p>Sorry, ${guess} is not correct. Try again!</p>`
  }
}
