/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for(i of nums) {
        map[i] = map[i] + 1 || 1;
    }
    for(j in map) {
        if(map[j] === 1) return j;
    }
};
