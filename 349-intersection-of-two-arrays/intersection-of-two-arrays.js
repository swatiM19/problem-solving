/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let firstSet = new Set();
    let secondSet = new Set();
    
    for(let num of nums1){
        firstSet.add(num);
    }
    for(let num of nums2){
        if(firstSet.has(num)){
            secondSet.add(num);
        }
    }
    return [...secondSet];
};