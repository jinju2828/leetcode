
function replaceElements(arr: number[]): number[] {
    let res = new Array(arr.length);
    for(let i in arr){
        res[i] = Math.max(...(arr.slice(Number(i) + 1)));
    }
    res[arr.length - 1] = -1;
    return res;
};
