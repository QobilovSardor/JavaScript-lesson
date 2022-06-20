"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// console.log(width);

btn.addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";
});
