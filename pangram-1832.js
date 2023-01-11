/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let map = new Map();
    for(i of sentence){
        map[i] = map[i] + 1 || 1;
    }

    return Object.keys(map).length !==26 ? false : true
};
