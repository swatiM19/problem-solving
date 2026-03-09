/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let n = grid.length;
    let m = grid[0].length;
    let queue = [];
    let visited = [];
    //visited
    for(let i=0; i<n; i++){
        visited[i] = [];
        for(let j=0; j<m; j++){
            visited[i][j] =0;
        }
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] == 2){
                queue.push([i,j,0]);
                visited[i][j] = 2;
            }
        }
    }
    let delrow = [-1,0,1,0];
    let delcol = [0,1,0,-1];
    let tm = 0;
    while(queue.length > 0){
        let r = queue[0][0];
        let c = queue[0][1];
        let t = queue[0][2];
        let node = queue.shift();
        tm = Math.max(tm, t);
        for(let i=0; i<4; i++){
            let nrow = delrow[i] + r;
            let ncol = delcol[i] + c;

            if(nrow >=0 && nrow < n && ncol >= 0 && ncol <m && grid[nrow][ncol] == 1 && visited[nrow][ncol] !== 2){
                queue.push([nrow,ncol,t+1]);
                visited[nrow][ncol] = 2;
            }
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(visited[i][j] !== 2 && grid[i][j] == 1){
                return -1;
            }
        }
    }
    return tm;
};