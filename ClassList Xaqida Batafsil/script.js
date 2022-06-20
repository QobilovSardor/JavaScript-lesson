"use strice";

const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length); // 1
// console.log(btns[0].classList.item(0)); // crimson
// console.log(btns[0].classList.add("blue")); // qo'shadi
// console.log(btns[0].classList.remove("crimson")); // o'chirib tashlaydi
// console.log(btns[0].classList.toggle("salom")); // htmlda shunaqa class bo'lsa o'chiradi
// bo'lmasa qo'shadi!

btns[0].addEventListener("click", () => {
    // if(!btns[1].classList.contains("blue")) {
    //     btns[1].classList.add("blue");
    // } else{
    //     btns[1].classList.remove("blue");
    // }

    btns[1].classList.toggle("blue");
})

const birds = document.querySelectorAll('li');

for (const bird of birds) {
  if (bird.matches('.endangered')) {
    console.log(`The ${bird.textContent} is endangered!`);
  }
}