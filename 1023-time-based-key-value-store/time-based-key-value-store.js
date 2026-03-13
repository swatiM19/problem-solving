class TimeMap{
    constructor(){
        this.map = {};
    }
    set(key, value, timestamp){
        if(!this.map[key]){
            this.map[key] = [];
        }
        this.map[key].push([timestamp, value])
    }
    get(key, timestamp) {
        if(!this.map[key]) return "";
        let result = "";
        let entries = this.map[key];
        let low = 0;
        let high = entries.length-1;

        while(low <= high){
            let mid = low + Math.floor((high-low)/2);
            if(entries[mid][0] <= timestamp){
                result = entries[mid][1];
                low = mid+1;
            } else {
                high = mid -1;
            }
        }
        return result;
    }
}