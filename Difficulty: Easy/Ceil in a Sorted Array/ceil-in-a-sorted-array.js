// User function Template for javascript
class Solution {
    findCeil(arr, x) {
        // code here
        let s = 0;
        let e = arr.length-1;
        if(x > arr[arr.length-1]) return -1;
        while(s<=e){
            let mid = s + Math.floor((e-s)/2);
            if(arr[mid] < x){
                s = mid+1;
            } else if(arr[mid] >= x){
                e = mid-1;
            }
        }
        return s;
    }
}
