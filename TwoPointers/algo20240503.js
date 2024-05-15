// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.



var longestSubarray = function (nums) {
    let left = 0;
    let result = 0;
    let zeroCount = 0;
// create a for loop to iterate through the array
    for (let right = 0; right < nums.length; right++) {
        // if the right index value is 0 increment our 0 counter
        if (nums[right] === 0) {
            zeroCount++;
        }
        // 
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        if (zeroCount <= 1) {
            result = Math.max(result, right - left);
        }
    }

    return result;
};