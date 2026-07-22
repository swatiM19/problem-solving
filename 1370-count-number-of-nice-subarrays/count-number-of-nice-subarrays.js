/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let prefixOdd = Array(nums.length).fill(0);
    for(let i =0; i<nums.length; i++){
        if(nums[i]%2 !== 0){
            prefixOdd[i] = 1;
        }
    }
    let map = new Map();
    let sum = 0;
    let count = 0;
    for(let i=0; i <prefixOdd.length; i++){
        sum = sum + prefixOdd[i];
        if(sum == k){
            count++;
        }
        if(map.has(sum-k)){
            count += map.get(sum-k);
        }
        if(map.has(sum)){
            map.set(sum , map.get(sum)+1);
        } else {
            map.set(sum , 1);
        }
    }
    return count ;
};