/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let ans = [];
    let max = -1;
    for(let i=heights.length-1 ; i>=0; i--){
        if(max < heights[i]){
            ans.push(i);
            max=heights[i];
        }
    }
    return ans.reverse()
};