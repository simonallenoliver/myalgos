// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).


// solution one

var equalPairs = function(grid) {
    // create a counter to return at the end
    let pairs = 0;

    // loop through each row
    for(let row = 0; row < grid.length; row++){
        // loop through every column
        for(let col = 0; col < grid.length; col++){
            let match = true;
            for(let i = 0; i < grid.length; i++){
                // check each value and if it matches does not match the row we are checking, set match to false and move on to the next loop
                if(grid[row][i] !== grid[i][col]){
                    match = false;
                    break;
                }
            }
            // if we make it through the loop itertation, increment pairs
            if(match){
                pairs++;
            }
        }
    }
    return pairs;
};


var equalPairs = function(grid) {
    // create counter to return
    let pairs = 0
    // create an empty map object
    const rows = new Map()
    // add rows to the map
    for(let r = 0; r < grid.length; r++){
        const row = JSON.stringify(grid[r])
        rows.set(row, 1 + (rows.get(row) || 0))
    }

    for(let c = 0; c < grid.length; c++){
        // use .map to get our cols
        const col = JSON.stringify(grid.map(row => row[c]))
        // add whatever value is stored at key col, or 0 if there is no such key
        pairs += (rows.get(col) || 0)
    }
    
    return pairs
};