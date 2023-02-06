/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let res = 0;
    for(i of num.toString()){
        if(num%i === 0) res++;
    }
    return res;
};
