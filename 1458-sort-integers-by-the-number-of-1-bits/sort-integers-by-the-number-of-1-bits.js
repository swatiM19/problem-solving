/**
 * @param {number[]} arr
 * @return {number[]}
 */
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    var count1 = (s) => {
        return [...s].filter((c) => c === '1').length;
    };
    arr.sort((a,b) => {
        const num1 = count1(a.toString(2));
        const num2 = count1(b.toString(2));
        if(num1 === num2) return a - b;
        return num1 - num2;
    })
    return arr;
};