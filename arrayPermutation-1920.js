/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans=new Array(nums.lengthj);
    for(i in nums){
        ans[i] = nums[nums[i]];
    }
    return ans;
};
