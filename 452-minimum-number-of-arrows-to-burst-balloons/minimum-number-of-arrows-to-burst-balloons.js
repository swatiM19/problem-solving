/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort(function(a,b){
        return a[1]-b[1];
    })
    console.log(points);
    let intervals = [];
    for(let interval of points){
        if(intervals.length == 0){
            intervals.push(interval);
        } else {
            let prev = intervals[intervals.length-1];
            if(interval[0] <= prev[1]){
                prev[0] = interval[0];
            } else {
                intervals.push(interval);
            }
        }
    }
    console.log(intervals);
    return intervals.length;
};