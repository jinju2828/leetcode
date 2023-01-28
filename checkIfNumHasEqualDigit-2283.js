/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let map = [];
    let numMap = {};
    for(i of num) {
        numMap[i] = numMap[i] + 1 || 1;
    }
    // console.log(numMap);
    for(i in num){
        map[i] = numMap[i] || 0;
    }
    // console.log(map);
    return map.join('') === num;

};
