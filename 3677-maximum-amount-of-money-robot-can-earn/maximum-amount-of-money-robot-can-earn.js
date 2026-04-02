/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    const m = coins.length;
    const n = coins[0].length;

    // 3D DP array
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(3).fill(Number.NEGATIVE_INFINITY)
        )
    );

    const solve = (i, j, neu) => {
        // Base case
        if (i === m - 1 && j === n - 1) {
            if (coins[i][j] < 0 && neu > 0) return 0;
            return coins[i][j];
        }

        // Out of bounds
        if (i >= m || j >= n) return Number.NEGATIVE_INFINITY;

        // Memo
        if (dp[i][j][neu] !== Number.NEGATIVE_INFINITY) {
            return dp[i][j][neu];
        }

        // Take current cell
        const take =
            coins[i][j] +
            Math.max(
                solve(i + 1, j, neu),
                solve(i, j + 1, neu)
            );

        // Skip if negative and neu > 0
        let skip = Number.NEGATIVE_INFINITY;

        if (coins[i][j] < 0 && neu > 0) {
            skip = Math.max(
                solve(i + 1, j, neu - 1),
                solve(i, j + 1, neu - 1)
            );
        }

        dp[i][j][neu] = Math.max(take, skip);
        return dp[i][j][neu];
    };

    return solve(0, 0, 2);
};