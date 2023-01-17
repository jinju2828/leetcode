/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length);
    for(i in indices){
        res[indices[i]] = s[i]
    }
    return res.join('');
};
