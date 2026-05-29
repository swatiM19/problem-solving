/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let minVal = Infinity;
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let sum = 0;

        while(num > 0){
            sum += num %10;
            num = Math.floor(num/10);
        }
        if(sum < minVal){
            minVal = sum;
        }
    }
    return minVal;
};