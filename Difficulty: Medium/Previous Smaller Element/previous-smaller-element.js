/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    prevSmaller(arr) {
        // code here
        let stack = [];
        let res = [];
        for(let i=0; i<arr.length; i++){
            while(stack.length > 0 &&  arr[i] <= arr[stack[stack.length-1]]){
                stack.pop();
            }
            res[i] = arr[stack[stack.length-1 ]] ?? -1;
            stack.push(i);
        }
        return res;
    }
}