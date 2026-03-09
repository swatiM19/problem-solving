/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let lo = 0;
  let hi = Math.max(...piles);
    while(lo + 1 < hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(canFinishInHHour(piles, mid, h)){
            hi = mid;
        } else {
            lo = mid;
        }
    }
    return hi;
};

var canFinishInHHour = function(piles, mid, h){
    let time = 0;
    for(let i=0; i<piles.length; i++){
        time += Math.ceil(piles[i]/mid);
        if(time> h){
            return false;
        }
    }
    return true;
}