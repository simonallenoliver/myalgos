// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some 
// (can be none) of the characters without disturbing the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function(s, t) {
    // set 2 indexes we will increment in our while loop
    let iT = 0
    let iS = 0
    while(iT < t.length){
        // the s string increments only when we find a match in the t string
        if(t[iT] === s[iS]){
            iS++
        }
        // the t string increments only when there is no match
        else iT++
    }
    // if our s index (iS) reaches the full length of the s string, meaning we found each value in the t string in a suitable order, we return true
    return iS === s.length
};

console.log(isSubsequence("abcx", "afbicd"))