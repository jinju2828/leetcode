function diagonalSum(mat: number[][]): number {
    let ans = 0;
    let len = mat[0].length;
    for(let i = 0 ; i < Math.ceil(len/2); i ++){
        let j = i;
        // console.log(mat[i][j], mat[i][len-Number(j+1)]);
        if(Number(j) === len-Number(j+1)) {
            ans += mat[i][j];
        }
        else {
            ans += mat[i][j];
            ans += mat[i][len-Number(j+1)];
        }
    }
    for(let i = Math.ceil(len/2) ; i < len; i ++){
        let j = i;
        // console.log(mat[i][j], mat[i][len-Number(j+1)]);
        ans += mat[i][j];
        ans += mat[i][len-Number(j+1)];
    }
    return ans;
};
