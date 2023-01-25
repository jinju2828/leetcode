
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let max = 0;
    let pos = 0;
    let neg = 0;
    for(i of nums){
        if(i < 0) neg ++;
        else if(i > 0) pos ++;
    }
    max = neg >= pos ? neg : pos;
    return max;
};
