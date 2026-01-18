/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();

    for(let i=0; i<nums.length; i++){
        map.set(nums[i], (map.get(nums[i])|| 0)+1);
    }

    const bucket = new Array(nums.length+1).fill().map(()=>[]);
    for(let [key,value] of map){
        bucket[value].push(key);
    }

    const result = [];
    for(let i=bucket.length-1; i>=0 && result.length <k ; i--){
        if(bucket[i].length > 0){
            result.push(...bucket[i]);
        }
    }
    return result;
};