// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vow = "aeiouAEIOU"
    sArray = Array.from(s)

    let temp = ""
    let count = 1
    for (let i = 0; i < sArray.length; i++) {
        if (vow.includes(sArray[i])) {
            temp += sArray[i]
            console.log(temp)
        }

    }
    for (let j = 0; j < sArray.length; j++) {
        if (vow.includes(sArray[j])) {
            sArray[j] = temp[temp.length - count]
            count++
        }
console.log(sArray)
    }
    s = sArray.join('')
    return s
};

console.log(reverseVowels("trickortreat"))

// accepted runtime beats 52% 