function differenceOfSum(nums: number[]): number {
    let eSum = 0, dSum = 0;
    for(let i of nums){
        eSum += i;
        for(let j of i.toString()){
            dSum += Number(j);
        }
    }
    return eSum > dSum ? eSum - dSum : dSum - eSum;

};
