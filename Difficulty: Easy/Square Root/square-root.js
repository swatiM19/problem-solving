/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    floorSqrt(n) {
        let s = 1;
        let e = n;
        if(n<2){
            return n;
        }
        while(s<=e){
            let mid = s + Math.floor((e-s)/2);
            if(mid*mid == n){
                return mid;
            } else if(mid*mid < n){
                s = mid+1;
            } else if(mid*mid > n){
                e = mid-1;
            }
        }
        return s-1;
        
    }
}