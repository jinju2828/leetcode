
function mostWordsFound(sentences: string[]): number {
    let ans: number = 0;
    for(let i of sentences) {
        if(ans < i.split(' ').length)  ans = i.split(' ').length;
    }

    return ans;
};
