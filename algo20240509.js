// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.


var findDifference = function(nums1, nums2) {

    // first we creats a set from nums 1, this enters each unique value from the nums 1 array into answer1
    let answer1 = new Set(nums1)
    // then we go through each num in nums2 and remove that number n from answer1
    nums2.forEach(n => {answer1.delete(n)});
    // we then repeat this process for answer 2 and nums1
    let answer2 = new Set(nums2);
    nums1.forEach(n => {answer2.delete(n)});    
    // we return an array of arrays using the spread operator to convert the sets back to arrays (the problem will not accept sets as answers)
    return [[...answer1],[...answer2]];
};

n1 = [1,2,3]

n2 = [2,4,6]

console.log(findDifference(n1, n2))