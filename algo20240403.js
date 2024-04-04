// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
    let current =  init
    return {
        increment: () => {
            current += 1
            return current
        },
        decrement: () => {
            // alt way to write shorter
            return --current
        },
        reset: () => {
            current = init
            return current
        }
    }
};



// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// We can use the forEach method to iterate through each element of the input array and apply the map function to each element. 
// We then store the transformed values in a new array.

var map = function(arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
      transformedArr[index] = fn(element, index);
    });
    return transformedArr;  
  };

// OR

var map = function(arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++) {
      transformedArr[i] = fn(arr[i], i);
    }
    return transformedArr;
  };

  