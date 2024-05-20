// https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction 
// (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. 
// If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.



// wow this one was incredibly rough (and also written sorta poorly)- get better and attempt again. geez I'm annoyed
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

var asteroidCollision = function (asteroids) {
    let astStack = new Stack();

    for (let i = 0; i < asteroids.length; i++) {
        if (astStack.isEmpty()) {
            astStack.push(asteroids[i]);
            continue;
        }

        // Handle collisions
        while (!astStack.isEmpty() && astStack.peek() > 0 && asteroids[i] < 0) {
            if (Math.abs(astStack.peek()) <= Math.abs(asteroids[i])) {
                astStack.pop(); // Destroy the smaller asteroid
            } else {
                break; // No further collisions
            }
        }

        // Push the current asteroid onto the stack
        if (astStack.peek() < 0 || asteroids[i] > 0) {
            astStack.push(asteroids[i]);
        }
    }

    return astStack.items;
};