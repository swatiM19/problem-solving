/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(canFinish(piles,h,mid)){
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    return low
};

var canFinish = function(piles, h, mid) {
    let t = 0;
    for(let i=0; i<piles.length; i++){
        t += Math.ceil(piles[i]/mid);
        if(t > h){
            return false;
        }
    }
    return true;
}