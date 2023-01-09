/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let map = new Map();
    let res = [];
    for(i of nums) {
        map[i] = map[i] + 1 || 1;
    }
    console.log(map)
    for(j in map) {
        if(map[j] === 1) res.push(j);
    }
    return res;
};
