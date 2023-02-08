function separateDigits(nums: number[]): number[] {
    let ans = [];
    for(let i of nums) {
        for(let j of i.toString()){
            // console.log(j)
            ans.push(Number(j));
        }
    }

    return ans;
};
