/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let arr = nums.sort((a,b)=> a-b);
    let sNum = arr[0], lNum = arr[nums.length-1];
    let a = lNum, b = sNum, n;
    while(b) {
        n = b;
        b = a % b;
        a = n;
    }
    return a;
};
