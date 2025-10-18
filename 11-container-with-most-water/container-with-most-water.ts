/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length -1;
    let max = 0;
    while(l < r){
        let lheight = height[l];
        let rheight = height[r];
        let areaheight = Math.min(lheight, rheight);
        max = Math.max(max, areaheight * (r-l));
        if(lheight <rheight){
            l++;
        } else {
            r--;
        }
    }
    return max;
};