function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let windowSum =0;
    let windowAvg = 0;
    //let maxAvg = 0;
    let count = 0;
    for(let i=0; i<k; i++){
        windowSum += arr[i];
    }
    windowAvg = windowSum/k;
    if(windowAvg >= threshold){
        count++;
    }
    // maxAvg = windowAvg;
    for(let i=k; i<arr.length; i++){
        windowSum += arr[i] -arr[i-k];
        windowAvg = windowSum/k;
        if(windowAvg >= threshold){
            count++;
        }
    }
    return count;
};