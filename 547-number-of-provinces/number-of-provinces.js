/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let V = isConnected.length;
    let adjLs = new Array(V).fill(0).map(()=> [])
    for(let i=0; i<V; i++){
        for(let j=0; j<V; j++){
            if(isConnected[i][j] == 1 && i!==j){
                adjLs[i].push(j);
                adjLs[j].push(i);
            }
        }
    }
    let vis = new Array(V).fill(0);
    let count = 0;
    for(let i=0; i<V; i++){
        if(!vis[i]){
            count++;
            dfs(i, vis, adjLs);
        }
    }
    return count;

};
var dfs = function(node , vis, adjLs){
    vis[node] = 1;
    for(let i of adjLs[node]){
        if(!vis[i]){
            dfs(i, vis, adjLs);
        }
    }
}