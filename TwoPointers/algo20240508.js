// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of 
// all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. 
// This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



// in this solution we are going to load all our values onto the right side 
// of the array, and as we iterate through the array slowly shift them to the left
// comparing the left to the right side with each shift.

var pivotIndex = function (nums) {
    // calculate the total sum of the array for our right value (in the reduce method, a and b are the previous and current val respectively)
    let right = nums.reduce((a, b) => a + b);
    let left = 0;
    // loop through the array and subtract the current value from our right side
    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        // check to see if the left and right sides are even and return i if so
        if (left === right) {
            return i
        }
        // otherwise, use what we took from the right side and give it to the left, continue to the next iteration 
        left += nums[i]
    }
    // if we reach the end of our loop, the sides were never even and we must return -1 as the problem states
    return -1
};