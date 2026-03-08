/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let map = {1:0, 0:1};
    let result = ""
    for(let i=0; i<n; i++){
        result = result + map[nums[i][i]];
    }
    return result;
};