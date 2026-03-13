class TimeMap{
    constructor(){
        this.map = {};
    }
    set(key, value, timestamp){
        if(!this.map[key]){
            this.map[key] = [];
        }
        this.map[key].push({value, timestamp})
    }
    get(key, timestamp) {
        if(!this.map[key]) return "";
        let result = "";
        for(let entry of this.map[key]){
            if(entry.timestamp <= timestamp){
                result = entry.value;
            }
        }
        return result;
    }
}