/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = new Array(nums1.length).fill(-1);
    let j;
    for(let i in nums1){
        j = nums2.indexOf(nums1[i]);
        for(j += 1; j < nums2.length ; j++){
            if(nums2[j] > nums1[i]) {
                ans[i] = nums2[j];
                break;
            }
        }
    }
    return ans;

};v
