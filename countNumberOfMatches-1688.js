/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let res = 0;
    let temp = n;
    while(temp > 1) {
        if(temp%2 === 0) {
            res += temp/2;
            temp = temp/2;
        }else {
            res += (temp-1)/2;
            temp = (temp-1)/2 + 1;
        }
        console.log("remaining teams, matches", temp, res)
    }
    return res;
};
