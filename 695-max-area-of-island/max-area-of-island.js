/**
 * @param {number[][]} grid
 * @return {number}
 */

var dfs = function(vis, grid, m, n, i, j) {
    if(i<0 || j<0 ||i >=m || j >=n || grid[i][j] !== 1 || vis[i][j] == 1){
        return 0
    }
    vis[i][j] = 1;
    return 1 +
    dfs(vis, grid, m, n, i+1, j)
    +dfs(vis, grid, m, n, i-1, j)
    +dfs(vis, grid, m, n, i, j+1)
    +dfs(vis, grid, m, n, i, j-1)
}
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let m = grid.length;
    let n = grid[0].length;
    let vis = new Array(m);
    for(let i=0; i<m; i++){
            vis[i] = new Array(n).fill(0);
    };
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1 && vis[i][j] == 0){
                let area = dfs(vis, grid, m, n, i,j);
                maxArea = Math.max(area, maxArea);
            }
        }
    }
    return maxArea; 
};