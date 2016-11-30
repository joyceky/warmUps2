// Find the only element in an array that only occurs once.
// For example in [1,2,2,3,3,5,5,1,6], 6 is the only element
// that occurs precisely one time.
"use strict";

var arr = [1,2,2,3,3,5,5,1,6];

function checkDupes(array) {
  // areturn sort filter, val, index, array {
  //   return val not euqaly to arr[index-1]
  //  && not equal to arr[index+1]}
  var unique = array.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
  console.log(unique);
  }
  // console.log(array);
  // var vals = [];
  // for (var i = 0; i < array.length; i++) {
  //   vals.push(array[i]);
  //   array.splice(i, 1);
  //   for (var x = 0; x < array.length; x++) {
  //     if (array[x] === vals[i]) {
  //       console.log("MATCH");
  //       console.log(array[x], vals[i]);
  //       vals.splice(i, 1);
  //       array.splice(x, 1);
  //       console.log(i, "loop");
  //     }
  //   }
  // }
  // console.log(vals, "vals");
  // console.log(array, "Array");


console.log(checkDupes(arr));
