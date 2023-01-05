function isPalindrome(x) {
    if(x < 0) return false;
    let arr = x.toString().split('');
    if(arr.length === 1) return true;
    let res = false;
    for (let i = 0; i < Math.trunc(arr.length / 2); i ++) {
        // console.log(i);
        res = arr[i] === arr[arr.length - (i + 1)] ? true : false;
        if(!res) break;
        // if( arr[i] === arr[arr.length - (i + 1)]) res = true;
        // return false;
    }
    return res;
}
