/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let map = new Map();

    for(let i=0; i<nums.length; i++){
        if (!map.has(nums[i])){
            map.set(nums[i], []);
        }
        map.get(nums[i]).push(i);
    }
    let minDist = Infinity;
    for(let indices of map.values()){
        if(indices.length < 3) continue;
        for(let j=0; j+2 < indices.length; j++){
            let dist = 2* (indices[j+2] - indices[j]);
            minDist = Math.min(dist, minDist);
        }
    }
    return minDist == Infinity ? -1 : minDist;
};