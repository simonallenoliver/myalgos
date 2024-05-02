// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

var longestOnes = function(nums, k) {
    // declare pointers
    let left = 0;
    let right = 0;
    
    while(right < nums.length){
        if(nums[right] === 0) k--;
        // If k becomes negative, move the left pointer to the right and increment k if the new start is 0
        if(k < 0){
            if(nums[left] === 0) k++;
            left++;
        }
        right++
    }
    return right - left;
};