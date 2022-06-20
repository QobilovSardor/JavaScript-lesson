"use strict";
const reklama = document.querySelectorAll(".promo__adv img"),
  promoGenre = document.querySelector(".promo__genre"),
  promoBg = document.querySelector(".promo__bg"),
  seriesList = document.querySelector(".promo__interactive-list"),
  addInput = document.querySelector(".adding__input"),
  checkbox = document.querySelector("[type='checkbox']"),
  addForm = document.querySelector(".add"),
  addBtn = addForm.querySelector("button");

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

reklama.forEach((item) => {
  item.remove();
});
promoGenre.innerHTML = "Komediya";
promoBg.style.backgroundImage = 'url("img/1.jpg")';

function showMySeries(list, db) {
  list.innerHTML = "";
  db.forEach((item, index) => {
    list.innerHTML += `
      <li class="promo__interactive-item">
        ${index + 1}. ${item}
      <div class="delete"></div>
      </li>
    `;
  });
}

showMySeries(seriesList, seriesDB.series);

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let value = addInput.value;

  seriesDB.series.push(value);
  showMySeries(seriesList, seriesDB.series);
  addInput.value = "";
});
