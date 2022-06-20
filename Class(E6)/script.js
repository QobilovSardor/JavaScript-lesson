"use strice";
// Function constructori context this
// function Car (name, color) {
//     this.name = name;
//     this.color = color;
//     this.fullName = () => {
//         console.log(`Bu nashinani nomi ${name} va bu mashinani rangi ${color}`);
//     }
//     this.fullName = this.fullName();
// }
// const spark = new Car ("Spark", "oq");
// const kiaK5 = new Car ("KiaK5", "qora");
// console.log(spark);
// console.log(kiaK5);

class Car {
    constructor (name, color, startSpeed, maxSpeed) {
        this.name = name,
        this.color = color;
        this.startSpeed = startSpeed;
        this.maxSpeed = maxSpeed;
    }
    globalSpeed() {
        return this.startSpeed + this.maxSpeed;
    }
    slowSpeed() {
        return this.maxSpeed - this.startSpeed;
    }
}

class Truck extends Car {
    constructor (name, color, startSpeed, maxSpeed, weight) {
        super(name, color, startSpeed, maxSpeed)
            this.weight = weight;
    }
    showMyProps() {
        console.log(`Bu mashinganing nomi ${this.name} uning og'irligi ${this.weight} tona`);
    }
}

const bmw = new Car("BMW", "white", 100, 300);
console.log(bmw);
console.log(bmw.globalSpeed());
console.log(bmw.slowSpeed());
const man = new Truck("Man", "red", 80, 250, 3);
console.log(man);
console.log(man.showMyProps());