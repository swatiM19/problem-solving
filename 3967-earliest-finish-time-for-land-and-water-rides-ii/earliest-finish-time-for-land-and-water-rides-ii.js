/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let land_water = solve(landStartTime, landDuration, waterStartTime, waterDuration);
    let water_land = solve(waterStartTime, waterDuration,landStartTime, landDuration);
    return Math.min(land_water, water_land);
};

var solve = function(start1, duration1, start2, duration2) {
    let finish1 = Infinity;
    for(let i=0; i<start1.length; i++){
        finish1 = Math.min(finish1, start1[i] + duration1[i]);
    }
    let finish2 = Infinity;
    for(let i=0; i<start2.length; i++){
        finish2 = Math.min(finish2, Math.max(finish1, start2[i]) + duration2[i]);
    }
    return finish2;
}