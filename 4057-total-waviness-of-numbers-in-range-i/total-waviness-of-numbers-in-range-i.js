/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    let count = 0;
    for(let i=num1; i<= num2; i++){
        count += countWaviness(i);
    }
    return count;
};
var countWaviness = function(num){
    const s = num.toString();
    if(s.length < 3) return 0;

    let count = 0;
    for(let i=0; i<s.length; i++){
        if((s[i] > s[i-1] && s[i] > s[i+1]) || (s[i] < s[i-1] && s[i] < s[i+1])){
            count++;
        }
    }
    return count;
}