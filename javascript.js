"use strict";

window.addEventListener("DOMContentLoaded", Init);

const arr = [];

function Init() {
  loop();
  console.log("Init complete");
}

function loop() {
  for (let counter = 0; counter < 256; counter++) {
    console.log(counter);

    createBubble();
  }
}

function createBubble() {
  const clone = document
    .querySelector("#templateBubbles")
    .content.cloneNode(true);
  const bubble = clone.querySelector(".bubble");
  arr.push(bubble);
  bubbles.appendChild(clone);

  colorBubbles();
}

function colorBubbles() {

  for (let counter = 2; counter < ; counter++) {
    console.log(counter);

}
