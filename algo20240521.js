// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
// Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. 
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
// For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

const decodeString = s => {
    const myStack = []; // Initialize an empty stack to store characters

    for (const character of s) {
        if (character !== "]") {
            myStack.push(character); // Push non-"]" characters onto the stack
            continue;
        }

        let cur = myStack.pop(); // Pop the last character from the stack
        let str = ''; // Initialize an empty string for the substring

        while (cur !== '[') {
            str = cur + str; // Build the substring by prepending characters
            cur = myStack.pop(); // Pop the next character
        }

        let num = ''; // Initialize an empty string for the repeat count
        cur = myStack.pop(); // Pop the next character

        while (!Number.isNaN(Number(cur))) {
            num = cur + num; // Build the repeat count by prepending digits
            cur = myStack.pop(); // Pop the next character
        }

        myStack.push(cur); // Push the "[" character back onto the stack
        myStack.push(str.repeat(Number(num))); // Push the repeated substring onto the stack
    }

    return myStack.join(''); // Join all remaining characters in the stack
};
