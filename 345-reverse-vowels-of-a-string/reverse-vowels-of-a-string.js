/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let letters = s.split('');
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let i = 0;
    let j = letters.length -1;
    while(i < j){
        if(vowels.includes(letters[i]) && vowels.includes(letters[j])){
                const temp = letters[j];
                letters[j] = letters[i];
                letters[i] = temp;
                i++;
                j--;
        }
        else if(!vowels.includes(letters[i])){
            i++;
        }
        else{
            j--;
        }
      
    }
    return letters.join('');
};