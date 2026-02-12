/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // TC: O(2^n * n);
    // SC: O(2^n * n);
    candidates.sort(function(a,b){
        return a-b;
    });
    
    let result = [];
    findCombination(0, candidates,target, [],result);
    return result;
};

var findCombination = function(ind,arr, target, slate, result) {
    if(target == 0){
        result.push([...slate]);
        return;
    }
    for(let i=ind; i< arr.length; i++){
        if(i > ind && arr[i] === arr[i-1]) continue;
        if(arr[i] > target) break;
        slate.push(arr[i]);
        findCombination(i+1, arr, target - arr[i], slate, result);
        slate.pop();
    }
};