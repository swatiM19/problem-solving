/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let lo = 1;
    let hi = n+1;
    while(lo + 1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(countRows(mid) <= n){
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return lo;
};

var countRows = function(n){
    return n * (n+1)/2;
}