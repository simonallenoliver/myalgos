// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. 
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in 
// altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). 

// Return the highest altitude of a point.


// my solution 

var largestAltitude = function(gain) {
    // set vars for current altitude and the highest altitude we've encountered
    let highest = 0;
    let current = 0;
    // iterate through the array, adding value of i to current
    for(let i = 0; i < gain.length; i++){
        current += gain[i]
        // whenever the current altitude is higher than highest, replace highest
        highest = Math.max(highest, current)
    }
    return highest
};