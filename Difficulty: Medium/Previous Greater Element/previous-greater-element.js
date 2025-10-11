/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    preGreaterEle(arr) {
        let stack = [];
        let previousGreater = new Array(arr.length).fill(-1);
        for(let i= 0; i<arr.length; i++){
            while(stack.length && arr[i] >= stack[stack.length-1]){
                stack.pop();
            }
            if(stack.length){
                previousGreater[i] = stack[stack.length-1];
            }
            stack.push(arr[i]);
        }
        return previousGreater;
    }
}