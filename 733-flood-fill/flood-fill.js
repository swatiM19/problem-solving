/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */


var floodFill = function(image, sr, sc, color) {
    let n = image.length;
    let m = image[0].length;
    let ans = image.map(row => [...row]);
    let delrow = [-1, 0, 1, 0];
    let delcol = [0, 1, 0, -1];
    if (image[sr][sc] == color) return image
    // let target = image[sr][sc];
    let queue = [];
    queue.push([sr, sc]);
    ans[sr][sc] = color
    let head = 0;
    while(head < queue.length){
        let [r, c] = queue[head++];
        for(let i=0; i<4; i++){
            let nrow = r + delrow[i];
            let ncol = c + delcol[i];
            if(nrow >= 0 && nrow<n && ncol >=0 && ncol <m && ans[nrow][ncol] == image[sr][sc]){
                queue.push([nrow, ncol]);
                ans[nrow][ncol] = color;
            }
        }

    }
    return ans;
}
// var floodFill = function(image, sr, sc, color) {
//     let ans = image.map(row => [...row]);
//     let delrow = [-1,0,1,0];
//     let delcol = [0,1,0,-1];
//     let target = image[sr][sc];
//     dfs(sr, sc,image, ans, delrow, delcol, target, color);
//     return ans;
// };
// var dfs = function(row, col, image, ans, delrow, delcol, target, newcolor) {
//     let n = image.length;
//     let m = image[0].length;
//     ans[row][col] = newcolor;

//     for(let i=0; i<4; i++){
//         let nrow = delrow[i] + row;
//         let ncol = delcol[i] + col;
//         if(nrow >= 0 && nrow < n && ncol >=0 && ncol < m && image[nrow][ncol] == target && ans[nrow][ncol] != newcolor){
//             dfs(nrow, ncol, image, ans, delrow, delcol, target, newcolor);
//         }
//     }
// }