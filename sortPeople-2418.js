
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = {};
    for(i in heights){
        map[heights[i]] = names[i];
    }
    // console.log(Object.keys(map).sort((a,b) => b-a));
    // console.log(map['180']);
    let sorted = Object.keys(map).sort((a,b) => b-a);
    // console.log(sorted);
    let result = [];
    for(sort in sorted){
        // console.log(map[sorted[sort]], sort);
        result[sort] = map[sorted[sort]];
    }
    return result;
};
