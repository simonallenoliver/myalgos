// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.

function memoize(fn) {

    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result
    }
}

const memoizedSum = memoize(function (a, b) {
    return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5



// Merge Strings Alternately 

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// my solution 

var mergeAlternately = function (word1, word2) {
    let result = ""
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (word1[i]) result += word1[i] // bracketless syntax works because it's in the same line 
        if (word2[i]) {
            result += word2[i]
        }
    }
    return result
};

console.log(mergeAlternately("dog", "catwoman"))

// slightly different solution - in below solution we do not have to 

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };