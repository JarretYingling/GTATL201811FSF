const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

const random_value = stuff[Math.floor(Math.random() * 14)];

stuff.forEach(function(value, index){
  if (random_value === value) {
    console.log(`random_value: ${random_value}`);
    console.log(`random_value: ${value}`);
    console.log(`random_value: ${index}`);
  }
});