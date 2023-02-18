function interpret(command: string): string {
    let ans = [];
    for(let i = 0; i < command.length; i++) {
        if(command[i] === '(') {
            if(command[i+1] === ')') {
                ans.push('o');
                i++;
            }
            else {
                ans.push(command[i+1]);
                ans.push(command[i+2]);
                i += 3;
            }
        }else {
            ans.push(command[i]);
        }
    }
    return ans.join('');
};
