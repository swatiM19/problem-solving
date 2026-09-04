/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let nums = [];
    for(let i=1; i<=n; i++){
        nums.push(i);
    }
    // console.log('nums', nums);
    dfs(0, nums, k, [], result);
    return result;
};

var dfs = function(i, nums, k, slate, result) {
    if(slate.length == k){
        result.push([...slate]);
        return;
    }
    for(let j=i; j< nums.length; j++){
        slate.push(nums[j]);
        dfs(j+1, nums, k, slate, result);
        slate.pop();
    }
}