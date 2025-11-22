/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let i =0; 
    let j = 0;
    let count =0;
    let index2 = Math.floor((nums1.length + nums2.length)/2);
    let index1 = index2 -1;
    let index1Element = -1;
    let index2Element = -1;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            if (count == index1) index1Element = nums1[i];
            if (count == index2) index2Element = nums1[i];
            count++;
            i++;
        } else {
            if (count == index1) index1Element = nums2[j];
            if (count == index2) index2Element = nums2[j];
            count++;
            j++;
        }
    }
    while(i < nums1.length){
        if (count == index1) index1Element = nums1[i];
        if (count == index2) index2Element = nums1[i];
        count++;
        i++;

    }
    while(j < nums2.length){
        if (count == index1) index1Element = nums2[j];
        if (count == index2) index2Element = nums2[j];
        count++;
        j++;
    }

    if ((nums1.length + nums2.length)%2 == 1) {
        return index2Element;
    }
    return (index1Element + index2Element)/2;
};