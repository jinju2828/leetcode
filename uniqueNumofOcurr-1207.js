/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    let res = [];
    for(i of arr){
        map[i] = map[i] + 1 || 1;
    }
    console.log(map);
    for(i in map){
        res.push(map[i]);
    }
    let result = new Set(res);
    return result.size === res.length ? true : false;

};
