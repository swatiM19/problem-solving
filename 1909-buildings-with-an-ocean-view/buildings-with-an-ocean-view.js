/**
 * @param {number[]} heights
 * @return {number[]}
 */
 // 
var findBuildings = function(heights) {
    let ans = [];
    // ans.push(0);
    for(let i=0; i<heights.length; i++){
        while(ans.length && heights[i] >= heights[ans[ans.length-1]]){
            ans.pop();
        }
        ans.push(i) 
    }
    return ans;
};