/**
 * @param {string} expression
 * @return {number[]}
 */

const op = {
    '+': (a,b) => (+a) + (+b),
    '-': (a,b) => a-b,
    '*': (a,b) => a*b
};

const memo = {};

function diffWaysToCompute(expression) {
    // console.log(typeof op, op);
    let res = [];

    for(let i = 0; i < expression.length; i++) {
        let opFunc = op[expression[i]];
        if(opFunc) {
            let left = diffWaysToCompute(expression.slice(0, i));
            let right = diffWaysToCompute(expression.slice(i+1));

            for(let l of left) {
                for (let r of right) {
                    if(memo[l+expression[i]+r]) {
                        res.push((memo[l+expression[i]+r]));
                    } else {
                        res.push(opFunc(l,r));
                        memo[l+expression[i]+r] = opFunc(l,r);
                    }
                }
            }
        }
    }
    return res.length !== 0 ? res : [expression];
}
