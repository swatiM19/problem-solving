/**
 * @param {number} n
 * @return {number}
 */
var minReqNum = function(n, qb){
    if(n == 0){
        return 0;
    }
    if(qb[n] !== -1){
        return qb[n];
    }
    let ans = Infinity;
    for(let i=1; i<= Math.sqrt(n); i++){
        ans = Math.min(ans, 1 + minReqNum(n-(i*i), qb));
    }
    qb[n] = ans;
    return ans;
};
var numSquares = function(n) {
    let qb = Array(n+1).fill(-1);
    return minReqNum(n,qb);
};