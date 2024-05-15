// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// this code works but not for larger data sets - time limit exceeded

var maxArea = function (height) {
    // create a variable that will hold the index value for whatever the current max is
    let maxWater = 0
    // create a loop to check the area of all the rectangles
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            if (height[i] >= height[j]) {
                if (Math.abs(height[j] * (i - j)) > maxWater) {
                    maxWater = Math.abs(height[j] * (i - j))
                }
            }
            if (height[j] > height[i]) {
                if (Math.abs(height[i] * (i - j)) > maxWater) {
                    maxWater = Math.abs(height[i] * (i - j))
                }
            }
        }
    }
    return maxWater
};


// this 2 pointer version fully succeeds

var maxArea = function (height) {
    // create a variable that will hold the index value for whatever the current max is
    let maxWater = 0
    // set two pointers
    let i = 0
    let j = height.length - 1
    // create a loop to check the area of all the rectangles
    while (i <  j) {
        if (height[i] >= height[j]) {
            if (Math.abs(height[j] * (i - j)) > maxWater) {
                maxWater = Math.abs(height[j] * (i - j))
            }
            // remember to decrement j not increment lolol
            j--
        }
        if (height[j] >= height[i]) {
            if (Math.abs(height[i] * (i - j)) > maxWater) {
                maxWater = Math.abs(height[i] * (i - j))
            }
            i++
        }
    }
    return maxWater
}




