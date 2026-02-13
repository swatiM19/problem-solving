/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;
    if(num === 1){
        return true;
    }
    
    while(left < right){
        let mid = left + Math.floor((right-left)/2);
        if((mid*mid) == num){
           return true;
           }
        else if((mid*mid) > num){
           right = mid;
           }
        else if((mid*mid)< num){
            left = mid+1;
        }
    }
    return false;
    
};