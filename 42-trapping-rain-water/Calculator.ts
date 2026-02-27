function calculate(s: string): number {
    let stack: number[] = [];
    let num = 0;
    let result = 0;
    let sign = 1;

    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(char >='0' && char <='9'){
            num = num * 10 + Number(char);
        } else if(char == '+'){
            result += num * sign;
            num = 0;
            sign = 1;
        } else if(char == '-'){
            result += (num * sign);
            num = 0;
            sign = -1;
        } else if(char == '('){ 
            stack.push(result);
            stack.push(sign);
            result = 0;
            num = 0;
            sign = 1;
        }else if(char == ')'){
            result += (num * sign);
            num = 0;
            result *= stack.pop()!;
            result += stack.pop()!;
        }
    }
    return result + (num*sign); 
};