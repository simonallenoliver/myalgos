// https://leetcode.com/problems/valid-parentheses/description/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    const closed = [")","}","]"]
    // edge case to exit quickly
    if(closed.includes(s[0])) return false
    const open = ["(","{","["]
    // make a compliments dictionary
    const dict = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    const stack = []

    // iterate through the list
    for(let i = 0; i < s.length; i++){
        // add all openers to the stack
        if(open.includes(s[i])){
            stack.push(s[i])
        }
        // if it's a closer, check to see if it's the compliment of the top of the stack
        else{
            if(s[i] === dict[stack[stack.length-1]]){
                stack.pop() // if it is - pop it
            }
            else{
                return false // if it's not a compliment, that means we have a situation where
                             // we've encountered a mismatched closer
            }
        }
    }
    // if we don't clear our stack - some of our openers don't have closers
    if(stack.length > 0)return false
    // if we reach the end, return true
    return true

};