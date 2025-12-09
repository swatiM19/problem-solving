function countGoodSubstrings(s: string): number {
    let count = 0;
    for(let i=0; i+2<s.length; i++){
        const a = s[i], b = s[i+1], c = s[i+2];
        if(a!==b && b!==c && a!==c){
            count++;
        }
    }
    return count;
};