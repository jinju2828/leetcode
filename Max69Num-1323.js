/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    // console.log(num.toString().split(""));
    // return num.toString().split("").sort((a,b)=>b-a).join('')
    let res = num.toString().split('');
    // console.log("1", res)
    for(i in res){
        // console.log("i", i==6);
        if(res[i]==6){
            // console.log("here")
            res[i] = 9;
            // console.log("new i", i);
            // console.log("result?",res);
            break;
        }
        // console.log("result?",res)
    }
    return res.join('');
};
