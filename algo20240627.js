// You have a long flowerbed in which some of the plots are planted, and 
// some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means
// empty and 1 means not empty, and an integer n, return true if n new
// flowers can be planted in the flowerbed without violating the 
// no-adjacent-flowers rule and false otherwise.


var canPlaceFlowers = function(flowerbed, n) {
    // iterate through the flowerbed
    for(let i = 0; i < flowerbed.length; i++){
        // check to see if each spots adjacent spots are full
        if(flowerbed[i] === 0 && (flowerbed[i-1] === 0 || flowerbed[i-1] === undefined) && (flowerbed[i+1] === 0 || flowerbed[i+1] === undefined)){
            // if not full, add a flower (1) in that spot and decrement n (our stock of flowers)
            flowerbed[i] = 1;
            n--;
        }
    }
    // after our loop, if n is greater than 0, it means there wasn't 
    // enough room for all the flowers in our stock n
    if(n > 0) return false;
    return true
};