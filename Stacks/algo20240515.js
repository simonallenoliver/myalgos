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

// "A stack is an ordered collection of items that follow the Last In First Out (LIFO) principle.
// The addition and removal of items take place at the same end, i.e. at the top. 
// The newest elements are at the top, and the oldest elements are at the bottom.

// We have many examples of stacks around us like a pile of books, a stack of trays or dishes, etc.

// A Stack is used by compilers in programming languages, by computer memory to store variables and function calls,
// and in text editors to perform undo & redo operations."


// here we have set up our Stack class with it's essential methods 
// note this is pretty much all pre built into JS and we could just use the built in methods
// but it's important to understand that custom built classes have some advantages over built ins:

// 1- Control and Clarity. 
// We have more control over what can and can't be done to our data; if we used a simple array and 
// built in methods, our data may be altered in an improper manner. but this way developers encountering the code for the  
// first time will be less likely to misunderstnad our intended data structures or accidentally screw something up

// 2 - Customization. 
// We can create additional methods for more niche requirments we may have for our data

// 3 - Performance. 
// While in some situations, it may be more performative to use JS native methods, in others we can achieve better 
// performance, for example if we used a singley linked list in our class

class Stack {
    constructor()
    {
        this.items = [];
    }
    // push adds to top
    push(element)
    {
        this.items.push(element);
    }
    // pop returns top most item and deletes it
    pop()
    {
        if (this.items.length == 0){
            return "Underflow"
        }
        else{
            return this.items.pop();
        }
    }
    // peek returns the top most element of stack without deleting it
    peek()
    {
        return this.items[this.items.length - 1];
    }
    // isEmpty
    isEmpty()
    {
        return this.items.length == 0;
    }

    // printStack
    printStack()
    {
        let str = "";
        for (let i = 0; i < this.items.length; i++){
            str += this.items[i]
        }
        return str;
    }
}

// and here is the solution to the algo -

var removeStars = function(s) {
    // we create an instance of our Stack class and name it stack (original right)
    let stack = new Stack();
    // we loop through the provided string s and 
    for(let i = 0; i < s.length; i++){
        // we add all the non-star characters to the stack
        if(s[i] !== "*"){
            stack.push(s[i])
        }
        // if we encounter a star we DO NOT add it to the stack and instead pop a character off the top
        else{
            stack.pop()
        }
    }
    // we return the printed stack
    return stack.printStack();
};