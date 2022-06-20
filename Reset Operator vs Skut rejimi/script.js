"use strict";
// reset operators!!!;
// function mySkills(lang, cms, ...aqua) {
//     console.log(lang, cms, aqua);
//     aqua.forEach((item, index) => {
//         console.log(`${index + 1} Extra ${item}`);
//     });
// }
// mySkills("JavaScript", "Wordpress", "HTML", "CSS", "Scss", "Bootstrap");

// function calc(a, b) {
//     b = b || 2;
//     console.log(a + b);
// }
// calc(1, 3);

const root = document.querySelector(".root");

function elements(...classes) {
    const div = document.querySelector("div");
    classes.forEach((item) => {
        div.classList.add(item);
    });
    root.append(div);
}
elements("width", "height", "bg");