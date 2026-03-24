/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length-1;
  let ans = Infinity;
  while(low <= high){
    let mid = low + Math.floor((high-low)/2);
    // handle sorted
    if(nums[low] <= nums[high]){
        ans = Math.min(ans, nums[low]);
        break;
    }
    // handle duplicates
    if(nums[low] == nums[high]){
        ans = Math.min(nums[low], ans);
        low = low+1;
        high = high-1;
        continue;
    }
    if(nums[low] <= nums[mid]){
        ans = Math.min(ans, nums[low]);
        low = mid+1
    } else {
        ans = Math.min(ans, nums[mid]);
        high = mid-1;
    }
  }
  return ans;  
};