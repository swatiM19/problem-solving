class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> arry;
        if(n%2==1){
            arry.push_back(0);
        }
        for(int i=1; i<=n/2; i++){
            arry.push_back(i);
            arry.push_back(0-i);
        }
        return arry;
    }
};