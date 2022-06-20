"use strice";

const buttons = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper");

const btn = document.createElement("button");
btn.classList.add("crimson");
wrapper.appendChild(btn);
// buttons[0].addEventListener("click", () => {
//   if (!buttons[1].classList.contains("blue")) {
//     console.log("Salom");
//     buttons[1].classList.add("blue");
//   } else {
//     buttons[1].classList.remove("blue");
//   }
// });

// buttons.forEach((item, index) => {
//   item.addEventListener("click", () => {
//     console.log("Click");
//   });
// });

wrapper.addEventListener("click", (event) => {
  // if (event.target && event.target.tagName == "BUTTON") {
  //   console.log("Click");
  // }

  if (event.target && event.target.matches("button.crimson")) {
    console.log("Click");
  }
});

// contains ===> true yokida false degani;
// matches ===> tanlab olingan degani;
