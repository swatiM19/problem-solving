/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    maxSubarraySum(arr, k) {
       if(k > arr.length) {
           return 0;
       }
       let maxSum = -Infinity;
       let windowSum = 0;
       for(let i=0; i<k ; i++){
           windowSum += arr[i];
       }
       maxSum = windowSum;
       for(let i = k; i<arr.length; i++){
           windowSum += arr[i] - arr[i-k];
           maxSum = Math.max(windowSum, maxSum);
       }
       return maxSum;
    }
}
