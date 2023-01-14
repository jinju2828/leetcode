
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = new Array(nums.length);
    for(i in nums){
        // console.log(`res${i-1}`, res[i-1], 'nums', nums[i], res[i-1] + nums[i])
        // res[i] = res[i-1] + nums[i] || nums[i];
        // console.log(res[i]);

        if(res[i-1]) res[i] = res[i-1] + nums[i];
        else res[i] = nums[i]
    }
    return res;
};
