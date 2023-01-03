/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(token) {
    let res = 0, stack = new Array();
    for(i of token) {
        if(token.length === 1) return token[0];
        if(!isNaN(i)) {
            stack.push(parseInt(i));
        }else if(i === '+') {
            res = 0;
            res += stack.pop();
            res += stack.pop();
            stack.push(res);
        }else if(i === '-') {
            res = stack.at(-2) - stack.at(-1);
            stack.pop();
            stack.pop();
            stack.push(res);
        }else if(i === '*') {
            res = 1;
            res *= stack.pop();
            res *= stack.pop();
            stack.push(res);
        }else if(i === '/') {
            res = Math.trunc(stack.at(-2) / stack.at(-1));
            stack.pop();
            stack.pop();
            stack.push(res);
        }
        console.log(stack);
    }
    // return res;
    return stack[0];
}
