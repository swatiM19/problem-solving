function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let res = Array(nums1.length)
    const map = new Map<number, number>();
    let stack:number[] = [];
    for(let i=nums2.length-1; i>=0; i--){
        console.log(i)
        while(stack.length > 0 && nums2[i] > nums2[stack[stack.length-1]]){
            stack.pop();
        }
        map.set(nums2[i], stack.length > 0 ? nums2[stack[stack.length - 1]] : -1);
        stack.push(i);
    }
    console.log(res)
    for(let i=0; i<nums1.length; i++){
        if (map.has(nums1[i])) {
            res[i] = map.get(nums1[i])!;
        } else {
            res[i] = -1;
        }
    }
    return res;
};