// [6,0,8,1,3] = [8,8,-1,3,-1]
function findNGE(nums: number[]) : number[] {
    let st:number[] = [];
    let result:number[] = [];
    for(let i=0; i<nums.length; i++){
        result[i] = -1;
    }

    for(let i=0; i<nums.length; i++){
        while(st.length > 0 && nums[i] > nums[st[st.length-1]]){
            let j = st.pop() as number;
            result[j] = nums[i];
        }
        st.push(i);
    }
    return result;
}
// console.log(findNGE([6,0,8,1,3]));

function findNSE(nums: number[]): number[] {
    let st:number[] = [];
    let result:number[] = [];
    for(let i=0; i<nums.length; i++){
        result[i] = -1;
    }
    for(let i=0; i<nums.length; i++){
        while(st.length > 0 && nums[i] < nums[st[st.length-1]]){
            let j = st.pop() as number;
            result[j] = nums[i];
        }
        st.push(i);
    }
    return result;
}
//console.log(findNSE([6,0,8,1,3])); // 0,-1,1,-1,-1
//console.log(findNSE([4, 8, 5, 2, 25])); // [2, 5, 2, -1, -1]

function findPGE(nums:number[]): number[] {
    let st:number[] = [];
    let result:number[] = [];
    for(let i=0; i<nums.length; i++){
        result[i] = -1;
    }
    for(let i=0; i<nums.length; i++){
        while(st.length && nums[i] >= nums[st[st.length-1]]) st.pop()
        result[i] = st.length > 0 ? nums[st[st.length-1]] : -1;
        st.push(i);
    }
    return result;
}
console.log(findPGE([6,0,8,1,3])); // -1,6,-1,8,8

function findPSE(nums: number[]): number[]{
    let st:number[] = [];
    let result: number[] = [];
    for(let i=0; i<nums.length; i++){
        result[i] = -1;
    }
    for(let i=0; i<nums.length;i++){
        while(st.length > 0 && nums[i] <= nums[st[st.length-1]]) st.pop()
        result[i] = st.length > 0 ? nums[st[st.length-1]] : -1;
        st.push(i)
    }
    return result;
}