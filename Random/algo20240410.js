// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// my attempt -

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let result = ""
    for(let i = 0; i < Math.max(str1.length, str2.length); i++){
        if(str1[i] === str2[i]){
            result += str1[i]
        }
        else{
            return result
        }
    }
};


// this returns 
// str1 =
// "ABABAB"
// str2 =
// "ABAB"

// Use Testcase
// Output
// "ABAB"

// and it should return "AB" 

// NEEDS WORK 