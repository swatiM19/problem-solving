/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let leftSmallArr = [];
    let rightSmallArr = [];
    let n = heights.length;
    let stack = [];
    for(let i=0; i< n; i++){
        while(stack.length !== 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        if(stack.length ==0){
            leftSmallArr[i] = 0;
        } else {
            leftSmallArr[i] = stack[stack.length-1] +1
        }
        stack.push(i);
    }
    while(stack.length !== 0){
        stack.pop();
    }
    for(let i=n-1; i>=0; i--){
        while(stack.length !== 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        if(stack.length ==0){
            rightSmallArr[i] = n-1;
        } else {
            rightSmallArr[i] = stack[stack.length-1] -1
        }
        stack.push(i);
    }
    console.log(rightSmallArr);
    let maxArea = 0;
    for(let i=0; i< n; i++){
        let area = (rightSmallArr[i] - leftSmallArr[i] + 1) * heights[i];
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};