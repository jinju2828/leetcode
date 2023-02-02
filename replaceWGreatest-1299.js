/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    // console.log(arr.slice(1));
    let res = new Array(arr.length);
    for(i in arr){
        // console.log(Number(i)+1, arr.slice(i));
        res[i] = Math.max(...(arr.slice(Number(i)+1)));
    }
    res[arr.length-1] = -1;
    return res;
};
