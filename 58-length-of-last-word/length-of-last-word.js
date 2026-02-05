/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    console.log('arr', arr)
    for (let i=arr.length-1; i >= 0; i--){
        // console.log('arr', arr[i], arr[i].length)
        if(arr[i].length >= 1){
            return arr[i].length;
        }
    }
};