
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let sortedArr = nums.sort((a,b) => a-b);
    // console.log(sortedArr);
    let res = [];
    for(i in nums) {
        if(target === nums[i]) res.push(i);
    }
    return res;
};
