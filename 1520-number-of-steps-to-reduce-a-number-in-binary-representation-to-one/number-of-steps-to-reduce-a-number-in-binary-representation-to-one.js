/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0;

    while (s !== "1") {
        if (s[s.length - 1] === "0") {
            // divide by 2
            s = s.slice(0, -1);
        } else {
            // add 1
            let arr = s.split("");
            let i = arr.length - 1;

            while (i >= 0 && arr[i] === "1") {
                arr[i] = "0";
                i--;
            }

            if (i >= 0) {
                arr[i] = "1";
            } else {
                arr.unshift("1");
            }

            s = arr.join("");
        }
        steps++;
    }

    return steps;
};