// context this ---> bu har doim nimagadur ergashadi!
// context thisni 4xil usulda functionlarga bog'lash mumkun!
// Oddiy functionlarga this == windo, agarda "use strict" == undefinedga!
"use strict";

// context thisni functionga bog'lash 1-usul;
// function showThis(x, y) {
//   console.log(this); // undefinedga agar "use strict" bo'lsa P.S bo'lmasa windowga teng
//   function calc() {
//     console.log(this); // undefinedga agar "use strict" bo'lsa P.S bo'lmasa windowga teng
//     return x + y;
//   }
//   console.log(calc());
// }
// showThis(10, 5);
//---------------------------------------------------------------------------//

// 2-usul Context this objectlarda == objectga teng!

// const obj = {
//   firstName: "Sardor",
//   lastName: "Qobilov",
//   fullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };
// obj.fullName();
//---------------------------------------------------------------------------//

// 3-usul: Context this Constructor va Cllaslarda = object copga
// function constructori
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(`${firstName} ${lastName}`);
//   };
// }
//---------------------------------------------------------------------------//

// 4-usul: Context this qo'lbola ergashtirish (ulash) call, aplly, bind yordamida
// const person = new Person("Sardor", "Qobilov");
// console.log(person);
// person.fullName();

// const calc1 = {
//   calc: function () {
//     return this.a + this.b;
//   },
// };

// const calc2 = {
//   a: 10,
//   b: 5,
// };

// const fullCalc = calc1.calc.call(calc2);
// console.log(fullCalc);
