"use strict";

// stores the text in variable
const text = document.querySelector(".typewritten").textContent

// defines the start number of counter
let counter = 1;

// stores audio files here
const typeAudio = document.querySelector("#typekey1")
const typeAudio2 = document.querySelector("#typekey2")
const typeSpace = document.querySelector("#typespace")

// tells text to not show yet when page opened
document.querySelector(".typewritten").textContent = "";

// function gets assigned when button clicked
const start = document.querySelector("#start")
start.addEventListener("click", startWriting)

function startWriting() {
    // if counter is an even number, then do ths
    if (text.length >= counter && counter % 2 == 0) {
        document.querySelector(".typewritten").textContent = text.substring(0, counter)
        counter++;
        typeAudio.play();
        // if counter is an odd number, do this
    } else if (text.length >= counter) {
        document.querySelector(".typewritten").textContent = text.substring(0, counter)
        counter++;
        typeAudio2.play();
    }
    timer();
}

const min = 200;
const max = 700;

function timer() {
    // after random time (0.2-0.7 seconds) next character is written
    setTimeout(function () {
        startWriting();
    }, Math.floor(Math.random() * (max - min)) + min);
}

