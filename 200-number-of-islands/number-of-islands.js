/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let islands = 0;
    let vis = new Array(m);
    for(let i=0; i<m; i++){
        vis[i] = new Array(n).fill('0');
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == '1' && vis[i][j] == '0'){
                // dfs(grid, vis, m, n, i, j);
                bfs(grid, [{r:i,c:j}], vis, m, n);
                islands++;
            }
        }
    }
    return islands;
};
var bfs = function(grid, queue, visited, m, n){
    while(queue.length > 0){
        let {r,c} = queue.shift();
        visited[r][c] = 1;
        for(const[delrow, delcol] of [[1,0],[-1,0],[0,1],[0,-1]]){
            let nrow = delrow + r;
            let ncol = delcol + c;
            if(nrow >= 0 && ncol >= 0 && nrow <m && ncol <n && grid[nrow][ncol] == '1' && visited[nrow][ncol] == '0'){
                visited[nrow][ncol] = 1;
                queue.push({r:nrow, c:ncol});
            }
        }
    }
}
var dfs = function(grid, vis, m, n, i, j){
    if(i<0 || j<0 || i >=m || j >=n || grid[i][j] !== '1'){
        return
    }
    if(vis[i][j] == '1'){
        return
    }
    vis[i][j] = '1';

    dfs(grid, vis, m, n, i+1, j);
    dfs(grid, vis, m, n, i-1, j);
    dfs(grid, vis, m, n, i, j+1);
    dfs(grid, vis, m, n, i, j-1);
}