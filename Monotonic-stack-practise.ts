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
console.log(findNGE([6,0,8,1,3]));