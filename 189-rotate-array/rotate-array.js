/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums,0, k-1);
    reverse(nums, k, nums.length-1);
    return nums;
};

var reverse = function(nums, s,e){
    while(s<e){
        let temp = nums[s];
        nums[s] = nums[e];
        nums[e] = temp;
        s++;
        e--;
    }
}