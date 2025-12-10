function maximumSubarraySum(nums: number[], k: number): number {
    if(k > nums.length){
        return 0;
    }
    let map = new Map();
    let l = 0;
    let windowSum = 0;
    let maxSum = 0;
    for(let r = 0; r < nums.length; r++){
        windowSum += nums[r];
        map.set(nums[r], (map.get(nums[r]) || 0) + 1)
        if(r-l+1 == k){
            if(map.size == k){
                maxSum = Math.max(windowSum, maxSum);
            }
            windowSum -= nums[l];
            map.set(nums[l], map.get(nums[l])-1);
            if(map.get(nums[l]) == 0){
                map.delete(nums[l]);
            }
            l++;
        }
    }
    return maxSum
};