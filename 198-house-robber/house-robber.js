/**
 * @param {number[]} nums
 * @return {number}
 */
    
var rob = function(nums) {
    let dp = new Array(nums.length).fill(-1);
//     memoization
//     function findMax(n){
//         if(n == 0) return nums[n];
//         if(n < 0) return 0;
//         if(dp[n] !== -1) return dp[n];
        
//         let pick = nums[n] + findMax(n-2);
//         let notPick = 0 + findMax(n-1);
        
//         return dp[n] = Math.max(pick, notPick);
//     }
    //
    // tabulation
    if(nums.length == 1) return nums[0];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i=2; i<nums.length; i++){
        let pick = nums[i] + dp[i-2];
        let notPick = 0 + dp[i-1];
        dp[i] = Math.max(pick, notPick);
    }
    return dp[dp.length-1];
    // return findMax(nums.length-1);
};