// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

// There are n kids with candies. You are given an integer array candies, 
// where each candies[i] represents the number of candies the ith kid has, 
// and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, 
// after giving the ith kid all the extraCandies, they will have the greatest 
// number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // loop to find max
    let max = 0
    const result = []
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > max){
            max = candies[i]
        }
    }
    // loop to compare max to each val plus extraCandies
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= max){
            result.push(true)
        }
        else{
            result.push(false)
        }
    
    }
return result
};