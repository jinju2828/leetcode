/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    // let stack = [];
    let res = 0;
    let r = 0, l = 0;
    for(i of s){
        // stack.push(i);
        if(i==='R') r++;
        if(i==='L') l++;
        if(r===l) {
            // stack = [];
            res++;
            // r = 0;
            // l = 0;
        }
    }
    return res;

};
