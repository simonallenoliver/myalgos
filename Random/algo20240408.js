// reduce right example - accumulates from right of array
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduceRight((prev, curr) => {
  return prev - curr;
});

console.log(sum); // Output: 15




// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};


const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9




// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

// Rest parameters in JavaScript allow us to represent an indefinite number of arguments as an array within a function. 
// It enables us to handle multiple arguments without explicitly defining each one in the function signature.

// The rest parameter is denoted by three dots (...) followed by a parameter name in a function declaration or function expression.

/**
 * argumentsLength(1, 2, 3); // 3
 */

// alt shorter way:
// const argumentsLength = (...args) => args.length;





// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

    let hasBeenCalled = false;
    let result;
  
    return function(...args) {
      if (!hasBeenCalled) {
        result = fn(...args);
        hasBeenCalled = true;
        return result;
      } else {
        return undefined;
      }
    }
  
  };
  
  let fn = (a,b,c) => (a + b + c);
  let onceFn = once(fn);
  
  console.log(onceFn(1,2,3)); // 6
  console.log(onceFn(2,3,6)); // undefined

// To solve this problem, we can return a new function that keeps track of whether it has been called before. 
// We can do this by using a closure to store a boolean flag that is initially set to false. The first time the new function is called, 
// we call the original function and set the flag to true. We also store the result of the original function. 
// Subsequent calls to the new function simply return undefined without calling the original function again.
