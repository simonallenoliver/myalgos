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




// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

var uniqueOccurrences = function(arr) {
    // create an empty map
    myMap = new Map();
    // iterate through the integer array and check to see if it's in the map
    for(let i = 0; i < arr.length; i++){
        if(myMap.has(arr[i])){
            // if it is, then increase the value of that key by 1
            myMap.set(arr[i], myMap.get(arr[i]) + 1)
        }
        // otherwise we need to add the key to our map with a val of 1
        else
        {
            myMap.set(arr[i], 1)
        }
    }
    // create a set - this will only include unique values
    let mySet = new Set(myMap.values())
    // if our set is the same size as our map, then the map only has unique vals as well and we return true
    return myMap.size === mySet.size
};