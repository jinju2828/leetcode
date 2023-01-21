/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // console.log(words[2].split('').reverse().join(''))
    for(i of words){
        if(i.split('').reverse().join('') === i) return i;
    }
    return '';
};
