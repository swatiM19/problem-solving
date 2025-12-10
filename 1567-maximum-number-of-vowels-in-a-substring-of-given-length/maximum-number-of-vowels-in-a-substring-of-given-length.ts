function maxVowels(s: string, k: number): number {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let l = 0;
    let windowCount = 0;
    let maxCount =0;

    for(let r =0; r<s.length; r++){
        if(vowels.includes(s[r])){
            windowCount++;
        }
        if(r -l + 1 > k){
            if(vowels.includes(s[l])){
                windowCount--;
            }
            l++;
        }
        maxCount = Math.max(maxCount, windowCount);
    }
    return maxCount;
};