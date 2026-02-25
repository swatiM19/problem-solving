/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0)
        return 0;
    let a = Math.abs(x);
    //if(a.toString(2).length > 31) return 0;
    let b = a.toString().split('').reverse();
    let c = Number(b.join(''));
    if(c.toString(2).length > 31) return 0;
    return x > 0 ? c : -c;
};