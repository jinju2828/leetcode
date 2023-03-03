let permute = function (nums, arr = [], res = []) {
    //base case
    if(nums.length === 0) res.push([...arr]);

    for(let i = 0; i < nums.length; i++) {
        let rest = nums.filter((num, index) => index !== i);
        arr.push(nums[i]);
        console.log("arr1", arr);
        console.log("nums1", nums);
        console.log("rest1", rest);
        permute(rest, arr, res);
        arr.pop();
        console.log("arr2", arr);
        console.log("nums2", nums);
    }

    return res;
}

let permute2 = function(nums, arr = [], res = []) {
    if(nums.length === 0) res.push([...arr]);
    
    for(let i = 0; i<nums.length; i++) {
        let rest = nums.filter((n,index)=>index!==i);
        arr.push(nums[i]);
        permute2(rest,arr,res);
        arr.pop();
    }

    return res;
}
