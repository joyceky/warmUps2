//Warmup-
//Create a car that is an object. The car is a color and starts out with a full tank of gas.
//When you drive the car, the gas tank is no longer full.
//When you fill the tank it is full again.
"use strict";

var myCar = {
  "color": "blue",
  "tank_full": true,
  "tank_percentage": 100
}

function driving(car) {
  if(car.tank_full) {
    car.tank_full = false;
    car.tank_percentage -= 20;
  }
}

function fillUp(car) {
  if(!car.tank_full) {
    car.tank_full = true;
    car.tank_percentage = 100;
  }
}
//
// console.log(myCar, "undriven");
// driving(myCar);
// console.log(myCar, "driving");
// fillUp(myCar);
// console.log(myCar, "fillUp");
//


var car = {
  color: "red",
  gasTankFull: true,
  drive: function() {
    this.gasTankFull = false;
  },
  fillTank: function() {
    this.gasTankFull = true;
  }
}

var car2 = {
  color: "blue",
  gasTankFull: true,
  drive: function() {
    this.gasTankFull = false;
  },
  fillTank: function() {
    this.gasTankFull = true;
  }
}

console.log(car);
console.log(car2);
console.log(car.drive());
console.log(car2.drive());
