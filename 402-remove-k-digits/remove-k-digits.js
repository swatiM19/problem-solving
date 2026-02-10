/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let elementsToRemove = k;
    let stack = [];
    if(num.length == 1 && elementsToRemove== 1){
        return "0";
    }
    for(let i=0; i<num.length; i++){
        while(stack.length && elementsToRemove > 0 && num[i] < stack[stack.length-1]){
            stack.pop();
            elementsToRemove--;
        }
        stack.push(num[i]);
    }
    //console.log(stack)
    //console.log(elementsToRemove);
    if(elementsToRemove > 0){
        while(elementsToRemove > 0){
            stack.pop()
            elementsToRemove--;
        }
    }
    while(stack.length > 1 && stack[0] == 0){
        stack.shift() 
    }
    if(stack.length == 0) return "0"
    return stack.join('')
};