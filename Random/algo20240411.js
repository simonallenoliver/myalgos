// There are n kids with candies. You are given an integer array candies, where each candies[i] 
// represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
// they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.


var kidsWithCandies = function(candies, extraCandies) {
    // we set up our return variable, an array
    let result = []
    // the first loop tracks our array index that we will actually update
    for(let i = 0; i < candies.length; i++){
        // the second loop compares the iteration of our first loop to the rest of the array
        for(let j = 0; j < candies.length; j++){
            // check to see if the current index is greater than the rest of the array
            if(candies[i] + extraCandies >= candies[j]){
                result[i] = true
            }
            else{
                result[i] = false
                // if we ever detect a false value, we break out of the inner loop and continue with the outer loop
                break
            }
        }
    }
    return result
};

console.log(kidsWithCandies([3, 4, 1, 7, 2], 3))


// here it is without a nested loop

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    
    const result = [];
    
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] + extraCandies >= maxCandies) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    
    return result;
  };