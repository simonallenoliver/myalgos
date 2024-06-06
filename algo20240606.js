// You are given two strings word1 and word2. Merge the strings by adding letters
// in alternating order, starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
    // loop through the strings and add one letter from each word in each iteration
    let cString = ""
    for(let i = 0; i < Math.max(word1.length, word2.length); i++){
        // if the word[i] exists, add it to the combined string
        if(word1[i]) cString += word1[i]
        if(word2[i]) cString += word2[i]
    }
    return cString
};

console.log(mergeAlternately("cat", "mouse"))