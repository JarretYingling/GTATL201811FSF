// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================
var len = array.length;
function insertionSort(array) {
  for (let i = 0; i < len; i++) {
    let index = array[i];
    let j = i - 1;
    while (j > -1 && index < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = index;
  }
  return array;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
