/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let obj = {};
  let chars = s.split(' ');
  if(pattern.length !== chars.length) return false;
  let set1 = new Set(pattern.split(''));
  let set2 = new Set(chars);
  if(set1.size !== set2.size) return false;
  for(let i in pattern){
      if(!obj[pattern[i]]){
        obj[pattern[i]] = chars[i];
      } else {
          if(obj[pattern[i]] != chars[i]){
              return false;
          }
    }
  }
  return true;  
};