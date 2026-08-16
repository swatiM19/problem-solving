// /**
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    let remainingFuel = 0;
    let index =0;
    let total = 0;
    for(let i=0; i<n; i++){
        remainingFuel += gas[i] - cost[i];
        if(remainingFuel < 0){
            remainingFuel = 0;
            index=i+1;
        }
        total += gas[i] - cost[i];
    }
    return total >= 0 ? index: -1;
};