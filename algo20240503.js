// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.


var longestSubarray = function (nums) {
    let left = 0;
    let right = 0;
    let max = 0;
    let deleted = false

    while (right < nums.length) {
        if (deleted = true) {
            if (nums[right === 1]) {
                right++

            }
            else {
                deleted = true
            }
        }

    }
}