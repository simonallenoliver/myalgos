// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.


// partial solution - come back to this one in a week or 2...


var closeStrings = function(word1, word2) {
    if( word1.length !== word2.length){
        return false
    }
    if(word1 === word2){
        return true
    }

    let set1 = new Set(word1);
    let set2 = new Set(word2);
    if (set1.size !== set2.size) return false
    
    
    // create two hashmaps to compare frequency

    let map1 = new Map();
    for(let i = 0; i < word1.length; i++){
        if (map1.has(word1[i])){
            map1.set(word1[i], map1.get(word1[i])+1)
        }
        else{
            map1.set(word1[i], 1)
        }
    }
    let map2 = new Map();
    for(let i = 0; i < word2.length; i++){
        if (map2.has(word2[i])){
            map2.set(word2[i], map2.get(word2[i])+1)
        }
        else{
            map2.set(word2[i], 1)
        }
    }
let freq1 = Array.from(map1.values()).sort((a, b) => a - b);
let freq2 = Array.from(map2.values()).sort((a, b) => a - b);

for(let i = 0; i < freq1.length; i++){
    if(freq1[i] !== freq2[i]) return false;
}
return true
};


