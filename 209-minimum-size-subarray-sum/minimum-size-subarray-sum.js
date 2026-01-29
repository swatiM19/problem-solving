/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let l = 0;
    let r = 0;
    let minLength = Infinity;
    let sum = 0;
    while(r < nums.length){
        sum += nums[r];
        if(sum < target){
            r++;
        } else if(sum >= target){
            while(sum >= target){
                minLength = Math.min(minLength, r-l+1);
                sum -= nums[l];
                l++;
            }
            r++;
        }
    }
    return (minLength == Infinity)? 0: minLength;
};