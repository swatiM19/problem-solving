/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {};
    let res = [];
    for(let num of nums1){
        if(obj[num] == undefined){
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    }
    for(let num of nums2){
        if(obj[num] > 0){
            res.push(num);
            obj[num]--;
        }
    }
    return res;
};