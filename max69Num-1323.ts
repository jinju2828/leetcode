function maximum69Number (num: number): number {
    let res = num.toString().split('');
    console.log(res)
    for(let i in res){
        if(res[i]==='6'){
            res[i] = '9';
            break;
        }
        console.log(res)
    }
    return Number(res.join(''));
};
