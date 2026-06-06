/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let ans = -1;
    let indegree = new Array(n+1).fill(0);
    let outdegree = new Array(n+1).fill(0);
    for(let [a,b] of trust){
        indegree[b]++;
        outdegree[a]++;
    }
    for(let i=1; i<=n; i++){
        if(indegree[i] == n-1 && outdegree[i] == 0){
            ans = i;
        }
    }
    return ans;
};