var findFinalValue = function(nums, original) {
    let target = original;
    while(nums.includes(target)) {
        target *= 2;
    }

    return target;

};
