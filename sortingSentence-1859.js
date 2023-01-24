/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // console.log(s.split(' '));
    let arr = s.split(' ');
    // console.log(arr[0].slice(-1));
    let map = {};
    for(i of arr) {
        map[i.slice(-1)] = i.slice(0, i.length-1);
    }
    // console.log(map);
    // console.log(Object.values(map).join(' '));
    return Object.values(map).join(' ')
};
