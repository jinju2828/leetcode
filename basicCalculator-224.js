/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
    let trimmed = s.split(' ').join('');

    let num = 0,
        result = 0,
        sign = 1,
        stack = new Array();

    for(let i = 0; i < trimmed.length; i++) {
        if(!isNaN(trimmed[i])) {
            num = (num * 10) + (trimmed[i] - '0');
            // num = (num * 10) + parseInt(trimmed[i]));
            // console.log(num);
        }else if(trimmed[i] === '+') {
            result += num * sign;
            // console.log(result, num, sign);
            sign = 1;
            num = 0;
        }else if(trimmed[i] === '-') {
            result += num * sign;
            // console.log(result, num, sign);
            sign = -1;
            num = 0;
            // console.log("after", result, num, sign);
        }else if(trimmed[i] === '(') {
            stack.push(result);
            stack.push(sign);
            // console.log(stack);
            result = 0;
            sign = 1;
            num = 0;
        }else if(trimmed[i] === ')') {
            result += num * sign;
            // console.log("result", result);
            // result *= stack.slice(-1)[0];
            // stack.pop();
            result *= stack.pop();
            // console.log("stack1", stack);
            // console.log("result1", result);
            // result += stack.slice(-1)[0];
            // stack.pop();
            result += stack.pop();
            // console.log("stack2", stack);
            //  console.log("result2", result);
            num = 0;
            sign = 1;
        }
    }

    result += num * sign;

    return result;
}
