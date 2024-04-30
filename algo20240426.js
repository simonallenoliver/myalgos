// You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

var maxOperations = function (nums, k) {
    // our eventual return statement
    maxOps = 0
    // initialize a hashmap
    const myHashMap = new Map();
    // create a loop to iterate through the nums data
    for (let i = 0; i < nums.length; i++){
        // set variable for the current iteration of the loop and the compliment of that value
        const current = nums[i]
        const compliment = k - current
        // check to see if theres a key that matches our compliment, and that the value (count) at that compliment is greater than 0
        if (myHashMap.has(compliment) && myHashMap.get(compliment) > 0){
            // then we increment our answer
            maxOps++
            // and then we decrement the value of that key since we used that number
            const temp = myHashMap.get(compliment)
            myHashMap.set(compliment, temp - 1)
            console.log(myHashMap)
        } else {
            const temp = myHashMap.get(current)
            // if temp is truthy, increment value of curr; if not, set value to 1
            myHashMap.set(current, temp? temp + 1 : 1)
            console.log(myHashMap)
        }
    }
    return maxOps
};

maxOperations([3,1,3,4,3,8,9,2,5,6], 6)