function minimumSum(num: number): number {
    // let arr: number[] = num.split('');
    let arr: number[] = Array.from(String(num), Number).sort((a,b) => a-b);
    // console.log(arr);

    let new1 = ""+arr[0]+arr[2] ;
    let new2 = ""+arr[1]+arr[3];

    return Number(new1)+Number(new2);
};
