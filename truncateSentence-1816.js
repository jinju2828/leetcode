/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // s.split(" ", k)
    return s.split(" ", k).join(' ');
};
