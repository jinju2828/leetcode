function subtractProductAndSum(n: number): number {
    let product = 1, sum = 0;
    for(let i of n.toString()) {
        product *= Number(i);
        sum += Number(i);
    }
    return product - sum;
};
