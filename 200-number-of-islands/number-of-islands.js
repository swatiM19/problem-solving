/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    const visited = grid.map(row => row.map(num => parseInt(num)));
    let count = 0;
    for(let i=0; i < visited.length; i++){
        for (let j=0; j <visited[0].length; j++){
            if(visited[i][j]==1){
                count++;
                bfs([{r:i, c:j}], visited);
            }
        }
    }
    return count;
};
var bfs = function(queue, visited) {
    let n = visited.length;
    let m = visited[0].length;
    while(queue.length > 0){
        let {r,c} = queue.shift();
        visited[r][c] = 0;
        console.log('r:',r, 'c:',c)
        for (const [delrow, delcol] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            let nrow = delrow + r;
            let ncol = delcol + c;
            if(nrow >=0 && nrow <n && ncol >=0 && ncol < m && visited[nrow][ncol] == 1){
                    visited[nrow][ncol] = 0;
                    queue.push({r:nrow, c:ncol})
                }
        }
        // for(let delrow = -1; delrow <=1; delrow++){
        //     for(let delcol = -1; delcol <=1; delcol++){
        //         if (Math.abs(delrow) == Math.abs(delcol)) continue;
        //         let nrow = delrow + r;
        //         let ncol = delcol + c;
        //         console.log('nrow:',nrow, 'ncol:',ncol)
        //         if(nrow >=0 && nrow <n && ncol >=0 && ncol < m && visited[nrow][ncol] == 1){
        //             visited[nrow][ncol] = 0;
        //             queue.push({r:nrow, c:ncol})
        //         }
        //     }
        // }
    }
}