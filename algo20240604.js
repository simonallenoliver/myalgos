// decimal to binary 

function convertToBinary(num){
    let temp = ""
    let answer = ""
// generates the binary number using successive division
    while(num >= 1){
        // the remainder is the added bit
        temp += num % 2
        // the quotient is used in the next iteration
        num = Math.floor(num/2)
    }
// reverses the string to properly display answer
    for(let i = temp.length-1; i >= 0; i--){
        answer += temp[i]
    }
    return answer
}

console.log(convertToBinary(78))