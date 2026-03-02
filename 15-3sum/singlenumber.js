var singleNumber = function(nums) {
    let set = new Set();
    for (let i of nums){
        if(set.has(i)){
            set.delete(i);
        } else{
            set.add(i);
        }
    }
    return Array.from(set)[0];
};