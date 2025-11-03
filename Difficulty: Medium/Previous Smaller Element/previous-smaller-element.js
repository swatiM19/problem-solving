/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    prevSmaller(nums) {
        // code here
    var st = [];
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result[i] = -1;
    }
    for (var i = 0; i < nums.length; i++) {
        while (st.length > 0 && nums[i] <= nums[st[st.length - 1]])
            st.pop();
        result[i] = st.length > 0 ? nums[st[st.length - 1]] : -1;
        st.push(i);
    }
    return result;
        
    }
}