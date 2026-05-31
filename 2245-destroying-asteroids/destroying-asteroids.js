/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids.sort((a,b) => a-b);
    let currentMass = mass;
    for(i of asteroids){
        if(currentMass < i){
            return false
        }
        currentMass += i;
    }
    return true;
};