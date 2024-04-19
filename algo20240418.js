// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
// If no such indices exists, return false.

var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            // We found a third element greater than both first and second
            return true;
        }
    }

    return false;
};

increasingTriplet([5,1,6])