/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a, b) => a - b); //[2,3,10,11,12,13,14,20]
        if(nums.length == 0) return 0;
        let maxCons = 1;// 2
        let currMax = 1
        for(let i=1; i<nums.length; i++){
            if(nums[i] == nums[i-1]) continue;
            if(nums[i] == nums[i-1]+1){
                currMax++;
            } else {
                currMax = 1;
            }
            maxCons = Math.max(currMax, maxCons)
        }
        return maxCons;
};