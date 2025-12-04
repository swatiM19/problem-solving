/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;
    nums.sort((a,b) => a-b);
    for(let i=0; i<=nums.length-3; i++){
        let l = i+1;
        let r = nums.length-1;
        while(l <r){
            let sum = nums[i]+ nums[l]+ nums[r];
            // console.log(Math.abs(target-sum),Math.abs(target-closestSum) )
            if(Math.abs(target-sum) < Math.abs(target-closestSum)){
                closestSum = sum;
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return closestSum;
};