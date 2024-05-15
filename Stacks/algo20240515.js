// https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// You are given a string s, which contains stars *.

// In one operation, you can:

// Choose a star in s.
// Remove the closest non-star character to its left, as well as remove the star itself.
// Return the string after all stars have been removed.

// Note:
// The input will be generated such that the operation is always possible.
// It can be shown that the resulting string will always be unique.



// Stack Notes - https://www.freecodecamp.org/news/stack-5404d9735f88/

// A stack is an ordered collection of items that follow the Last In First Out (LIFO) principle.
// The addition and removal of items take place at the same end, i.e. at the top. 
// The newest elements are at the top, and the oldest elements are at the bottom.

// We have many examples of stacks around us like a pile of books, a stack of trays or dishes, etc.

// A Stack is used by compilers in programming languages, by computer memory to store variables and function calls,
// and in text editors to perform undo & redo operations.

class Stack {
    constructor()
    {
        this.items = [];
    }
    // push
    push(element)
    {
        this.items.push(element);
    }
    // pop

    // peek

    // isEmpty

    // printStack
}