/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let st = [];
    let result = new Array(heights.length);
    for(let i=heights.length-1; i>=0; i--){
        count = 0;
        while(st.length && heights[i] > st[st.length-1]){
            st.pop();
            count++;
        }
        result[i] = st.length == 0? count: count+1;
        st.push(heights[i]);
    }
    return result;
};