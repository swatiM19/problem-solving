function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let res = Array(nums1.length).fill(-1);
    const map = new Map<number, number>();
    let stack:number[] = [];
    for(let i=0; i<nums2.length; i++){
        while(stack.length && nums2[i]>nums2[stack[stack.length-1]]){
            let idx = stack.pop();
            map.set(nums2[idx],nums2[i]);
        }
        stack.push(i);
    }
    for(let i=0; i<nums1.length; i++){
        res[i] = map.get(nums1[i]) ?? -1;
    }
    return res;
};