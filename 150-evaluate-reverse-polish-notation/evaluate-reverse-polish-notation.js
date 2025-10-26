/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let op = {
        '+':(num1, num2) => num1+num2,
        '-':(num1, num2) =>num1-num2,
        '*':(num1, num2) => num1* num2,
        '/':(num1, num2) => Math.trunc(num1/num2),
    }
    for(let i of tokens){
        if(op[i]){
            let num2 = stack.pop();
            let num1 = stack.pop();
            let newNum = op[i](num1, num2);
            stack.push(newNum);   
        } else {
            stack.push(parseInt(i));
        }
    }
    return stack.pop();
};