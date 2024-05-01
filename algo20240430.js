// Sliding Window Technique

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
// Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function(nums, k) {
    // sort the array in descending order
    // return the average of the first k numbers

    // use comparison function to sort correctly
    avg = 0
    nums.sort((a, b) => b - a)
    console.log(nums)
    for(let i = 0; i < k; i++){
        avg += nums[i]
    }
    avg /= k 
    return avg
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))

// welp this above way just finds the max average, but we need to find the max average of a contiguous sub array so no sorting allowed

// this one works 
var findMaxAverage = function(nums, k) {
    
    let sum = 0
    let maxAvg = -Infinity;
    // find the sum of the first window
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    // find first avg
    maxAvg = sum / k

    // loop through the rest of the array shifting the window by one each time
    for(let i = k; i < nums.length; i++){
        sum += nums[i] - nums[i - k]
        // if the  current window is higher, replace maxAvg
        if(sum / k > maxAvg) maxAvg = sum / k
    }

    return maxAvg
};