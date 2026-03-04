/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
        const rowMap = new Array(100).fill(0);
        const colMap = new Array(100).fill(0);

        const m = mat.length;
        const n = mat[0].length;

        let cnt = 0;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 1) {
                    rowMap[i]++;
                    colMap[j]++;
                }
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 1 && rowMap[i] === 1 && colMap[j] === 1) {
                    cnt++;
                }
            }
        }
        return cnt;
};