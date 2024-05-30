// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    // we set a temporary array to hold all our zeros
    let temp = []
    // create a while loop to itterate through the num array
    let i = 0
    while(i < nums.length){
        if(nums[i] === 0){
            temp.push(nums.splice(i,1))
        }
        // we only increment the loop if we did not remove a zero, because removing from our array lowers our nums.length 
        else{i++}
    }
    // we push the number of 0s equal to the length of our temp array into nums and then return nums
    for(let i = 0; i < temp.length; i++){
        nums.push(0)
    }
    return nums
};