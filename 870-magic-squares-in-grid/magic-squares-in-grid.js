/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(g) {
    let n = g.length, m = g[0].length, ans = 0;

    for (let i = 0; i <= n - 3; i++) {
        for (let j = 0; j <= m - 3; j++) {

            if (g[i+1][j+1] !== 5) continue;

            let seen = Array(10).fill(false);
            let ok = true;

            for (let r = i; r < i + 3; r++) {
                for (let c = j; c < j + 3; c++) {
                    let v = g[r][c];
                    if (v < 1 || v > 9 || seen[v]) ok = false;
                    seen[v] = true;
                }
            }

            if (!ok) continue;

            if (
                g[i][j] + g[i][j+1] + g[i][j+2] === 15 &&
                g[i+1][j] + g[i+1][j+1] + g[i+1][j+2] === 15 &&
                g[i+2][j] + g[i+2][j+1] + g[i+2][j+2] === 15 &&

                g[i][j] + g[i+1][j] + g[i+2][j] === 15 &&
                g[i][j+1] + g[i+1][j+1] + g[i+2][j+1] === 15 &&
                g[i][j+2] + g[i+1][j+2] + g[i+2][j+2] === 15 &&

                g[i][j] + g[i+1][j+1] + g[i+2][j+2] === 15 &&
                g[i][j+2] + g[i+1][j+1] + g[i+2][j] === 15
            ) {
                ans++;
            }
        }
    }

    return ans;
};



