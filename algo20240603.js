// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// Given an integer array nums and an integer val, remove all occurrences 
// of val in nums in-place. The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,
//  to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain 
// the elements which are not equal to val. The remaining elements of 
// nums are not important as well as the size of nums.
// Return k.

function removeElement(nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
}