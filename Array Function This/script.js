"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", function(e) {
    console.log(this);
    this.style.background = "crimson";
    // e.target.style.background = "blue";
});

const obj = {
    numb: 12,
    func: function() {
        console.log(this); //  numb numb
        const say = () => {
            console.log(this); //  numb ga tneng
        }
        say()
    }
}
obj.func();

// Calback functionni qisqartma yozilishi!
const calc = (a) => a * 2;
console.log(calc(2));