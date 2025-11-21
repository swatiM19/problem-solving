/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(coins.length+1).fill(-1).map(() => new Array(amount+1).fill(-1));
    function minCoin(ind, target){
        if(ind == 0){
            if(target % coins[ind] == 0){
                return target/ coins[ind];
            } else return Infinity;
        }
        if(dp[ind][target] !== -1) return dp[ind][target];
        
        let notTake = 0 + minCoin(ind-1, target);
        let take = Infinity;
        if(coins[ind] <= target){
            take = 1 + minCoin(ind, target - coins[ind])
        }
        return dp[ind][target] = Math.min(take, notTake);
    }
    let result = minCoin(coins.length-1, amount);
    if (result == Infinity) return -1;
    
    return result;
    
};