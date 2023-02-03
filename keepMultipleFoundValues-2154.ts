function findFinalValue(nums: number[], original: number): number {
    let target = original;
    while(nums.includes(target)) {
        target *= 2;
    }

    return target;
};
