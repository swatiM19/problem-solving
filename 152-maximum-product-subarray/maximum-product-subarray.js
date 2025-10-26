/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let maxNum = nums[0];
    let minNum = nums[0];
    let ans = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i] < 0) {
            // swap(maxNum, minNum);
            let temp = maxNum;
            maxNum = minNum;
            minNum = temp;
        }
        maxNum = Math.max(maxNum * nums[i], nums[i]);
        minNum = Math.min(minNum * nums[i] , nums[i]);
        // console.log('max, min',maxNum, minNum)
        ans = Math.max(maxNum, ans);
    }
    return ans;
};
