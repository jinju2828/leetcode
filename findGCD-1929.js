/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let arr = nums.sort((a,b)=> a-b);
    let sNum = arr[0], lNum = arr[nums.length-1];
    // console.log(arr[0], arr[nums.length-1]);
    console.log(sNum, lNum);
    let a = lNum, b = sNum, n;
    while(n!==0){
        n = a % b;
        if(n===0) {
            return b;
        }else {
            a = b;
            b = n;
        }
    }
};
