// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


var reverseVowels = function(s) {
    // create var to hold all the vowels of s
    let newVows = []
    // create a temp array we will use to manipulate characters
    let newS = []
    // create a var to check if a character is a vowel
    const vowels = "aeiouAEIOU"
    // iterate through s
    for(let i = 0; i < s.length; i++){
        // use includes to see if the character is a vowel
        if(vowels.includes(s[i])){
            // if so, add it to our vowels var
            newVows.push(s[i])
        }
    }
    // iterate through s again and add the non vowels to our new s array in order
    // and add the vowels in reverse order (pop off the top)
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            newS.push(newVows.pop())
        }
        else{
            newS.push(s[i])
        }
    }
    // join the array elements to create the vowel reversed s string
    return s = newS.join("")
};