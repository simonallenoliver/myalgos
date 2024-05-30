// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    let carry = 1;
    const answer = Array(nums.length).fill(1);

    // prefix products starting from front
    for (let i = 0; i < nums.length; i++) {
        answer[i] *= carry;
        carry *= nums[i];
    }

    // reset carry
    carry = 1;

    // suffix products starting from back
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= carry;
        carry *= nums[i];
    }

    return answer;
};