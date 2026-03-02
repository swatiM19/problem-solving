// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {

    searchInSorted(arr, k) {
        // your code here
        let s = 0;
        let e = arr.length-1;
        while(s <= e){
            let mid = s + Math.floor((e-s)/2);
            if(arr[mid] == k) return true;
            else if (arr[mid] < k){
                s = mid +1;
            } else {
                e = mid -1;
            }
        }
        return false;
    }
}