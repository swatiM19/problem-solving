/**
 * @param {number} n
 * @return {number}
 */
var minCost = function(n) {
    const num = n;
    return (num * (num-1))/2;
};