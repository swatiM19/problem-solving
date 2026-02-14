/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
   let stack = [];
   let m = -Infinity;
   for(let i= nums.length-1; i>=0; i--){
        while(nums[i] > stack[stack.length -1]){
            m = stack.pop();
        }
        if(nums[i] < m){
            return true;
        }
        stack.push(nums[i]);
   }
   return false;
};