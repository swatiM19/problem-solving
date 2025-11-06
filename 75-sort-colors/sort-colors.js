/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
var sortColors = function(nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length-1
    while(mid<= end){
        switch(nums[mid]){
            case 0 :
                swap(nums,start, mid)
                start++;
                mid++;
                break;
            case 1 :
                mid++;
                break;
            case 2 :
                swap(nums, mid, end);
                end--;
                break;
        }
    }
};