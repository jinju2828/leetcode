var twoSum = function(nums, target) {
    var arr = nums;
    var tar = target;
    var res = [];

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === tar) {
                res = [i, j];
                break;
            }
        }
    }
    return res;
}
//second solution using hash map
let twoSum_2 = function(nums, target) {
    let map = {};
    let res = [];
    for(i in nums){
        // console.log(map);
        // console.log(Object.keys(map));
        // console.log(Object.keys(map).includes((target-nums[i]).toString()));
        if(Object.keys(map).includes((target-nums[i]).toString())) {
            res.push(i);
            res.push(map[target-nums[i]]);
        }
        map[nums[i]] = i;
    }
    return res;

}
