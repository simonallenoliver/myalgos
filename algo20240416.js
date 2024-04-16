// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. 
// The returned string should only have a single space separating the words. Do not include any extra spaces.

var reverseWords = function(s) {
    let tempWord = ""
    let wordArray = []
    for(let i = 0; i < s.length; i++){
        if(s[i] !== " "){
            tempWord += s[i]
            if(s[i+1] === " " || s[i+1] === undefined){
                wordArray.push(tempWord)
                tempWord = ""
            }
        }
    }
    s = ""
    for(let i = wordArray.length - 1; i >= 0; i--){
        s += wordArray[i]
        if(i>0) s += " "
        
    }
    return s
};

console.log(reverseWords("I am in the house"))