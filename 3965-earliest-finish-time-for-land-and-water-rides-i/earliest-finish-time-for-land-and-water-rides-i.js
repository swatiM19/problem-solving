/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            // land -> water
            let startLand = landStartTime[i];
            let finishLand = startLand + landDuration[i];
            let startWater = Math.max(finishLand, waterStartTime[j]);
            let finishWater = startWater + waterDuration[j];
            ans = Math.min(ans, finishWater);
            // water-> land
            startWater = waterStartTime[j];
            finishWater = startWater + waterDuration[j];
            startLand = Math.max(finishWater, landStartTime[i]);
            finishLand = startLand + landDuration[i];
            ans = Math.min(ans, finishLand);
        }
    }
    return ans;
};