/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greatest = candies[0];
    for(i of candies) {
        if(i >= greatest) greatest = i;
    }
    let res = new Array(candies.length).fill(false);
    for(i in candies) {
        if(candies[i] + extraCandies >= greatest) res[i] = true;
    }
    return res;
};
