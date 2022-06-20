"use strict";

const btn = document.querySelector("#btn");

const timerId = setTimeout(logger, 3000);
clearInterval(timerId);
function logger() {
  console.log("set time out");
}
