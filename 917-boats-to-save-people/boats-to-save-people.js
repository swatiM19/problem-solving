/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => (a-b))
    let boat = 0;
    let i = 0;
    let j = people.length-1;
    while(i<=j){
        let target = people[i] + people[j];
        if(target == limit){
            boat++;
            i++;
            j--;
        } else if(target < limit){
            boat++;
            i++;
            j--;
        } else if(target > limit){
            boat++;
            j--;
        }
    }
    return boat;
};