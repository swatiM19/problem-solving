function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    if (arr.length == 0) return 0;
    if (k > arr.length) return 0;
    if (k <= 0) return 0;

    let windowSum =0;
    let target = threshold * k
    let count = 0;
    for(let i=0; i<k; i++){
        windowSum += arr[i];
    }
    if(windowSum >= target){
        count++;
    }
    // maxAvg = windowAvg;
    for(let i=k; i<arr.length; i++){
        windowSum += arr[i] -arr[i-k];
        if(windowSum >= target){
            count++;
        }
    }
    return count;
};