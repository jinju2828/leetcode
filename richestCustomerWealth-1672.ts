function maximumWealth(accounts: number[][]): number {
    let ans = 0, temp = 0;
    for(let i in accounts) {
        for(let j of accounts[i]) {
            temp += j
        }
        if(temp > ans) ans = temp;
        temp = 0;
    }
    return ans;
};
