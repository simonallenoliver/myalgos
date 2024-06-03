// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing 
// order, and two integers m and n, representing the number of elements in 
// nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead 
// be stored inside the array nums1. To accommodate this, nums1 has a length 
// of m + n, where the first m elements denote the elements that should be 
// merged, and the last n elements are set to 0 and should be ignored. nums2
// has a length of n.


var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers (length of nums1, length of nums2, and length of combined)
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    // while there are still nums in nums2 to merge -
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }
};