/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    if (s[s.length - 1] != '0') {
        return false;
    }
    const queue = [];
    queue.push(0);
    let far = 0;

    const visited = new Array(s.length).fill(false);
    visited[0] = true;

    while (queue.length) {
        let idx = queue.shift();
        if (idx === s.length - 1) return true;
        let start = Math.max(idx+minJump, far)
        let end = Math.min(idx + maxJump, s.length-1);
        for(let i=start; i<=end; i++){
           if (s[i] == '0' && !visited[i]) {
                visited[i] = true;
                queue.push(i); 
            } 
        }
        far = Math.min(idx + maxJump + 1, s.length - 1);
    }

  return false;
};