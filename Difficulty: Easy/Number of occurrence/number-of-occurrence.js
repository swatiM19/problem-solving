/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countFreq(arr, target) {
        let val = 0;
        let left = this.firstOccurence(arr, target);
        let right = this.lastOccurence(arr,target);
        if(left == -1 && right == -1){
            return 0;
        }
        val = right - left + 1;
        return val;
        
    }
    firstOccurence(arr, target){
        let l = 0;
        let r = arr.length-1;
        let leftOccurence = -1;
        while(l<=r){
            let mid = l + Math.floor((r-l)/2);
            if(arr[mid] == target){
                leftOccurence = mid;
                r = mid-1;
            } else if(arr[mid] < target){
                l = mid+1;
            } else {
                r = mid-1;
            }
        }
        return leftOccurence;
        
    }
    lastOccurence(arr, target){
        let l = 0;
        let r = arr.length-1;
        let rightOccurence = -1
        while(l<=r){
            let mid = l + Math.floor((r-l)/2);
            if(arr[mid] == target){
                rightOccurence = mid;
                l = mid+1;
            } else if(arr[mid] < target){
                l = mid+1;
            } else {
                r = mid-1;
            }
        }
        return rightOccurence;
    }
}