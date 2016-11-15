'use strict';

var array = [12,2,3,90,0];

//Print an array that has only numbers larger than 10
//expect [12,90]
function g10(val) {
  return val > 10;
}

console.log(array.filter(g10));


//What if I want the numbers that are less than 10?
//expect [2,3,0]
function l10(val) {
  return val < 10;
}

console.log(array.filter(l10));


////////////////////////////////////////////////////
var students =
[
  {name: "Lori", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Sally", grade:"3"},
  {name: "Cory", grade:"1"}
];


// using a for loop write code that will show the info for people in 3rd grade
console.log(students);
console.log(students.length);
for (var i = 0; i < students.length; i++) {
  if (students[i].grade === "3") {
    console.log(students[i], i);
  }
}

// use the filter method to produce the same results
function grade3(element) {
  return element.grade === "3";
}

console.log(students.filter(grade3));


// What if I just want the names of the third graders? Write code that will return an array with just their names.
var thirdGraders = [];

function names(element) {
    if (element.grade === "3") {
    thirdGraders.push(element.name);
  }
}
console.log(students.filter(names));
console.log(thirdGraders);

console.log(students.filter(grade3).map(function(student){
return student.name;}
));
