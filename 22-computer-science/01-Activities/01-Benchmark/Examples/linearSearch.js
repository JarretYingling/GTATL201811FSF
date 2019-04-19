// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");

// Generate an array of the given length.
var length = 100000000;
var stuff = generate(length);
var randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
  // Add the function 'linearSearch' to the suite.
  .add("Linear Search", function linearSearch() {
    for (var i = 0; i < stuff.length; i += 1) {
      if (stuff[i] === randomValue) {
        return stuff[i];
      }
    }
    return false;
  })

  //
  .add("Binary Search", function binarySearch() {

    let recursiveFunction = function (arr, x, start, end) {
      if (start > end) return false;
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) return mid;
      if (arr[mid] > x) {
        return recursiveFunction(arr, x, start, mid - 1);
      } else {
        return recursiveFunction(arr, x, mid + 1, end);
      }
    }

    if (recursiveFunction(stuff.sort(), randomValue, 0, stuff.length - 1))
      console.log(`found at index: ${}`);
    else document.write("Element not found!<br>");
    
  })

  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log(
      "On average, " +
        benchmark.name +
        " took " +
        benchmark.stats.mean +
        " seconds to complete."
    );
  })

  // Run the test!
  .run();
