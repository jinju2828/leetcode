/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let str1 = '', str2 = '';
    for(i of word1){
        str1 = str1 + i || i;
    }
    for(j of word2){
        str2 = str2 + j || j;
    }

    return str1 === str2;
};
