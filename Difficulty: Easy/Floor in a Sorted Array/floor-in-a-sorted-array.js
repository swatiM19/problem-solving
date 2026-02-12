// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {

    findFloor(arr, x) {
        // your code here
        return this.binarySearch(arr, x)
        
    }
    
    binarySearch(arr, x){
        let s = 0;
        let e = arr.length-1;
        if(x < arr[0]) return -1;
        if(arr.length == 1 && arr[0] < x) return 0
        while(s <=e ){
            let mid = s + Math.floor((e-s)/2);
            if(arr[mid] > x){
                e = mid-1;
            } else if(arr[mid] <= x){
                s= mid+1;
            }
        }
        return e;
    }
}