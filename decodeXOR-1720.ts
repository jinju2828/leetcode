function decode(encoded: number[], first: number): number[] {
    let arr = [first];
    for(let i in encoded){
        arr.push(encoded[i]^arr[i]);
    }
    return arr;
};
