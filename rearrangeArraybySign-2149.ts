function rearrangeArray(nums: number[]): number[] {
    let pos = [], neg = [];
    for(let i of nums){
        if(i > 0) pos.push(i);
        else neg.push(i);
    }
    let ans = [];
    for(let i = 0; i < pos.length; i++){
        ans.push(pos[i]);
        ans.push(neg[i]);
    }
    return ans;
};
