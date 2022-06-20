"use strice";

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("1");
  } else if (data === { age: 18 }) {
    console.log("2");
  } else {
    console.log("3");
  }
}
checkAge({ age: 18 });

let y = "5";
let x = 10;

console.log(y++ + x);
