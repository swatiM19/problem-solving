function sumSubarrayMins(arr: number[]): number {
    let mod = 1e9+7;
    let leftMin = prevMinimumElement(arr);
    let rightMin = nextSmallerElement(arr);
    let ans = 0;
    for(let i=0; i<arr.length; i++){
        let leftEle = i - leftMin[i];
        let rightEle = rightMin[i] -i ;
        ans = ans + (arr[i]*leftEle* rightEle) % mod;
    }
    return ans % mod;
};


function prevMinimumElement(nums: number[]): number[]{
    let stack:number[]= [];
    let res = Array(nums.length).fill(-1);
    for(let i=0; i<nums.length; i++){
        while(stack.length && nums[i]<= nums[stack[stack.length-1]]) stack.pop();
        res[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    return res;
}

function nextSmallerElement(nums: number[]): number[]{
    const res = Array(nums.length).fill(nums.length);
    const stack:number[] = [];
    for(let i=0; i< nums.length; i++){
        while(stack.length && nums[i]<= nums[stack[stack.length-1]]){
            let j = stack.pop() as number;
            //stack.pop() as number;
            res[j] = i
        }
        stack.push(i);
    }
    return res
}