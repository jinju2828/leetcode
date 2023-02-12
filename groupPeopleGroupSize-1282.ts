function groupThePeople(groupSizes: number[]): number[][] {
    let ans = [], map = {}, arr=[];
    for(let i in groupSizes){
        map[i] = groupSizes[i];
    }
    let sortable = [];
    for(let i in map) {
        sortable.push([i, map[i]]);
    }
    sortable.sort((a,b) => a[1] - b[1]);
    for(let i in sortable) {
        arr.push(Number(sortable[i][0]));
        if(sortable[i][1] === arr.length){
            ans.push(arr);
            arr = []
        }
    }
    return ans;
};
