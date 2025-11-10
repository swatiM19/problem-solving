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
        let n = arr.length;
        let low = 0; 
        let high = n-1;
        let ans = -1;
        
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            if(arr[mid] <= x){
            ans = mid;
            low = mid+1
        } else {
            high = mid-1
        }   
        }
        return ans;
    }
}