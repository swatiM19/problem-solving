class Solution {
public:
    vector<int> decompressRLElist(vector<int>& nums) {
        vector<int> newArr;
        for(int i=0; i< nums.size()-1; i+=2){
            for(int j=0; j < nums[i];j++){
                newArr.push_back(nums[i+1]);
            }
        }
        return newArr;
    }
};