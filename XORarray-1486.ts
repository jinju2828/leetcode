function xorOperation(n: number, start: number): number {
    let nums = [];
    // let ans = start;
    for(let i = 0; i < n; i++){
        nums[i] = start + 2 * i;
    }
    // console.log(nums)
    let ans = nums.reduce(
        (acc, c) => acc ^ c,
        0
    )
    return ans;
};
