function maxVowels(s: string, k: number): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelWindow = 0;
    let maxVowel = 0;
    for(let i=0; i<k; i++){
        if(vowels.includes(s[i])){
            vowelWindow++;
        }
    }
    maxVowel = vowelWindow;
    for(let i=k; i<s.length; i++){
        if(vowels.includes(s[i])){
            vowelWindow++;
        }
        if(vowels.includes(s[i-k])){
            vowelWindow--;
        }
        maxVowel = Math.max(maxVowel, vowelWindow);
    }
    return maxVowel;
};