/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = 0;
    let temp = 0;
    for(i of gain){
        temp += i;
        if(highest < temp) highest = temp;
    }
    return highest;
};
