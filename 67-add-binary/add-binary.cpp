class Solution {
public:
    string addBinary(string a, string b) {
        string result;
        int i = a.length()-1;
        int j = b.length()-1;
        int carry = 0;
        while(i >=0 || j>=0){
            int sum = carry;
            if(i>=0){
                // cout<<"a[i]"<<a[i]<<endl;
                sum += a[i] - '0';
                i--;
            }
            if(j>=0){
                // cout<<"b[j]"<<b[j]<<endl;
                sum += b[j] - '0';
                j--;
            }
            // cout<<"sum"<<sum<<endl;
            carry = sum>1 ? 1:0;
            result = result + to_string(sum%2);
        }
        if(carry){
            result = result+ to_string(carry);
        }
        reverse(result.begin(), result.end());
        
        return result;
    }
};