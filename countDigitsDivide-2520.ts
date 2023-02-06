function countDigits(num: number): number {
    let res = 0;
    for(let i of num.toString()){
        if(num%Number(i) === 0) res++;
    }
    return res;
};
