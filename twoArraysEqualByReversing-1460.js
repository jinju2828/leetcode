/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    // console.log(target, arr.sort((a,b) => a-b), target.join('') === arr.sort((a,b) => a-b).join(''))
    return  target.sort((a,b) => a-b).join('') === arr.sort((a,b) => a-b).join('');
};
