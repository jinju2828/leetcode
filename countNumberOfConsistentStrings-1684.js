/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = words.length;
    // for(i of allowed){
    // console.log(words[2].includes(i))
    for(j of words){
        for(w of j) {
            if(!allowed.includes(w)) {
                res--;
                break;
            }
        }
    }
    // }
    return res;
};
