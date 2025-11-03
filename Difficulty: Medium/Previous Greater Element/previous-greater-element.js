/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    preGreaterEle(arr) {
        // code here
        let st = [];
        let result = [];
        for(let i=0; i<arr.length; i++){
            result[i] = -1;
        }
        for(let i=arr.length-1; i>=0; i--){
            while(st.length > 0 && arr[i] > arr[st[st.length-1]]){
                let j = st.pop();
                result[j] = arr[i];
            }
            st.push(i);
        }
        return result;
    }
}