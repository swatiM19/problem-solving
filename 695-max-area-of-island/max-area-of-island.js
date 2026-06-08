/**
 * @param {number[][]} grid
 * @return {number}
 */
var bfs = function(grid, vis, m, n, i, j){
    let queue = [{r:i,c:j}];
    vis[i][j] = 1;
    let area = 0;
    while(queue.length > 0){
        const {r,c} = queue.shift();
        area++;
        for(const[dr,dc] of [[1,0],[-1,0],[0,1],[0,-1]]){
            const nr = r + dr;
            const nc = c + dc;
            if(nr >=0 && nr <m && nc >= 0 && nc <n && grid[nr][nc] == 1 && vis[nr][nc] == 0){
                vis[nr][nc] = 1;
                queue.push({r:nr, c:nc});
            }
        } 
    }
    return area;
}
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let m = grid.length; 
    let n = grid[0].length;
    let vis = new Array(m);
    for(let i=0; i<m; i++){
        vis[i] = new Array(n).fill(0);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1 && vis[i][j] == 0){
                let area = bfs(grid, vis, m, n, i, j);
                maxArea = Math.max(area, maxArea);
            }
        }
    }
    return maxArea;
};