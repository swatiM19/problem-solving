function findMaxAverage(nums: number[], k: number): number {
    if (k > nums.length) {
        return -1;
    }

    let windowSum = 0;
    let maxSum = -Infinity
    for(let i=0; i<k; i++){
        windowSum += nums[i]
    }
    maxSum = windowSum
    for(let i=k ;i < nums.length ; i++){
        windowSum += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum , windowSum);
    }
    return maxSum/k;
};