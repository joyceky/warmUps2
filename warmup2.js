// Write a function that takes 2 inputs. One input is an array and the second input is a callback function.

// The callback function will expect three inputs:
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.

// Your myMap function should return an array.
"use strict";

function myMap(array, callbackFnc){
  //WRITE CODE HERE
  // return array.map(callbackFnc); // this solution is off limits :)
  for (var i = 0; i < array.length; i++) {
    callbackFnc(array[i], i, array);
  }
    console.log(array);
    return array;
}

var numArray = [1,2,3,4];

//Write a callback function that is passed to myMap that will return the given input plus 4.
var addedArray = myMap(numArray,function(){
  return numArray[i] + 4;
});

// Write a callback function that is passed to myMap that will return a string like "The Person at index 0 owes $1"
var dollarArray = myMap(numArray, function(){
  //WRITE CODE HERE

})

console.log(addedArray); // [5,6,7,8]
console.log(dollarArray);
// [ 'The Person at index 0 owes $1',
//   'The Person at index 1 owes $2',
//   'The Person at index 2 owes $3',
//   'The Person at index 3 owes $4' ]





var myArr = [1, 2, 4, 5, 6, 7, 8, 9, 345]

function map(array, callBack) {
  for (var i = 0; i < array.length; i++) {
    callBack(i, myArr);
  }
}

function callBack (currentValue, index, array) {

  return currentValue * 4;

  }

console.log(map(myArr));
