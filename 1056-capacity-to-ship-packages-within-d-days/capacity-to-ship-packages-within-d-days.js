/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// bruteForce
// var shipWithinDays = function(weights, days) {
//     let minCap = Math.max(...weights);
//     let maxCap = 0;
//     for(let i=0; i<weights.length; i++){
//         maxCap += weights[i];
//     }
//     //check every capacity;
//     for(let i= minCap; i<=maxCap; i++){
//         if(canShip(weights, days, i)){
//             return i;
//         }
//     }
// };
var shipWithinDays = function(weights, days) {
    let low = Math.max(...weights);
    let high = 0;
    for(let i=0; i<weights.length; i++){
        high += weights[i];
    }
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(canShip(weights, days, mid)){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low;
}

var canShip = function(weights, days, capacity){
    let currentLoad = 0;
    let daysNeeded = 1;
    for(let i=0; i<weights.length; i++){
        if(currentLoad + weights[i] > capacity){
            daysNeeded++;
            currentLoad = 0;
        }
        currentLoad += weights[i];
    }
    return daysNeeded <= days;
}