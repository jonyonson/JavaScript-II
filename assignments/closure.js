// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add6 = makeAdder(6);
console.log(add6(5)); // 11

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.

const counter = () => {
  let count = 0;
  return function() {
    count++;
    return count;
  };
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter()); // 3

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const myCounter = counterFactory();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.increment()); // 3
console.log(myCounter.decrement()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.decrement()); // 0
console.log(myCounter.decrement()); // -1
