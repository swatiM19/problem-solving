/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = { value: 0 };
    let m = grid.length; 
    let n = grid[0].length;
    let vis = new Array(m);
    for(let i=0; i<m; i++){
        vis[i] = new Array(n).fill(0);
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1 && vis[i][j] == 0){
                dfs(grid, vis, i, j, perimeter, m, n);
            }
        }
    }
    return perimeter.value;  
};
var dfs = function(grid, vis, i, j, perimeter,m,n){
    if(i<0 || i>=m || j<0 || j>=n || grid[i][j] == 0){
        perimeter.value++;
        return;
    }
    if(vis[i][j] == 1){
        return;
    }
    vis[i][j] = 1;

    dfs(grid, vis, i+1,j, perimeter,m,n);
    dfs(grid, vis, i-1,j, perimeter,m,n);
    dfs(grid, vis,i,j+1, perimeter,m,n);
    dfs(grid, vis,i,j-1, perimeter,m,n);
}