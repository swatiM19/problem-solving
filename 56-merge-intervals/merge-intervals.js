/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    let mergedInterval = [];
    mergedInterval.push(intervals[0]);
    for(let i=0; i<intervals.length; i++){
        if( mergedInterval[mergedInterval.length-1][1] < intervals[i][0]){
            mergedInterval.push(intervals[i]);
        } else {
            mergedInterval[mergedInterval.length-1][1] = Math.max(
                mergedInterval[mergedInterval.length - 1][1],
                intervals[i][1],
            );
        }
    }
    return mergedInterval
};