function countGoodSubstrings(s: string): number {
    let count = 0;
    for(let i=0; i<s.length-2; i++){
        let char1 = s.charAt(i);
        let char2 = s.charAt(i+1);
        let char3 = s.charAt(i+2);
        if(char1 !== char2 && char2 !== char3 && char3 !== char1){
            count++;
        }
    }
    return count;
};