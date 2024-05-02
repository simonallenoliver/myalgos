// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

var maxVowels = function(s, k) {
    let temp = 0
    const vowels = "aeiou"
    // find first substring
    for(let i = 0; i < k; i++){

        if(vowels.includes(s[i])){
            temp++
        }
    }
    let max = temp
    // starting after the intitial window position, move the window by one and recalculate the vowels based on the letter we gained and the one we lost
    for(let i = k; i < s.length; i++){
        if(vowels.includes(s[i])) temp++

        if(vowels.includes(s[i-k])) temp--
        max = Math.max(max, temp);
    }

    return max
};

