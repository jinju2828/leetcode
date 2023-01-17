

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = new Array(nums.length).fill(0);
    // console.log(res);
    for(i in nums){
        for(j in nums){
            if(nums[j] < nums[i]) res[i] += 1;
        }
    }
    return res;
};
