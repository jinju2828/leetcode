/**
 * @param {string} expression
 * @return {number[]}
 */

const op = {
    '+': (a,b) => (+a) + (+b),
    '-': (a,b) => a-b,
    '*': (a,b) => a*b
}
console.log(typeof op);

function diffWaysToCompute(expression) {
    let res = [];

    for(let i = 0; i < expression.length; i++) {
        let opFunc = op[expression[i]];
        console.log("case",i ,opFunc);
        if(opFunc) {
            let left = diffWaysToCompute(expression.slice(0, i));
            let right = diffWaysToCompute(expression.slice(i+1));
            console.log("left, right", left, right);

            for(let l of left) {
                console.log("left",left);
                for (let r of right) {
                    res.push(opFunc(l,r));
                    console.log("res",res)
                }
            }
            // res.push(opFunc(left,right));
        }
    }
    console.log("expression", expression)
    return res.length !== 0 ? res : [expression];
}
