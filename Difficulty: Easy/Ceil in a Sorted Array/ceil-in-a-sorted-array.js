// User function Template for javascript
class Solution {
    findCeil(arr, x) {
        // code here
        return this.binarySearch(arr, x);
        
    }
    
    binarySearch(arr,x){
        let n = arr.length;
        let low = 0;
        let high = n-1;
        let ans = -1;
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            if(arr[mid] >= x){
                ans = mid;
                high = mid -1;
            } else {
                low = mid+1;
            }
        }
        return ans;
    }
}
