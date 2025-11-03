// [6,0,8,1,3] = [8,8,-1,3,-1]
function findNGE(nums) {
    var st = [];
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result[i] = -1;
    }
    for (var i = 0; i < nums.length; i++) {
        while (st.length > 0 && nums[i] > nums[st[st.length - 1]]) {
            var j = st.pop();
            result[j] = nums[i];
        }
        st.push(i);
    }
    return result;
}
// console.log(findNGE([6,0,8,1,3]));
function findNSE(nums) {
    var st = [];
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result[i] = -1;
    }
    for (var i = 0; i < nums.length; i++) {
        while (st.length > 0 && nums[i] < nums[st[st.length - 1]]) {
            var j = st.pop();
            result[j] = nums[i];
        }
        st.push(i);
    }
    return result;
}
console.log(findNSE([6, 0, 8, 1, 3])); // 0,-1,1,-1,-1
console.log(findNSE([4, 8, 5, 2, 25])); // [2, 5, 2, -1, -1]
