// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

var reverseVowels = function(s) {
    let newVows = []
    const vowels = "aeiouAEIOU"
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            newVows.push(s[i])
        }
    }
    console.log('NW', newVows)
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            s[i] = 3
        }
    }
    return s
};