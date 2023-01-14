
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let plus = ["++X", "X++"];
    let res = 0;
    for(i of operations) {
        if(plus.includes(i)) res++;
        else res--;
    }
    return res;
};
