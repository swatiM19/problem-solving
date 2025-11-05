// class node
class N <K, V>{
    key:K;
    val:V;
    prev: N<K,V> | null;
    next: N<K,V> | null;
    constructor(key:K, val:V){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null
    }
}

class LRUCache <K, V> {
    capacity:number;
    map: Map<K, N<K,V>>;
    head: N<K,V>;
    tail: N<K,V>;
    
    constructor(capacity: number){
        this.capacity = capacity;
        this.map = new Map<K, N<K,V>>();

        this.head = new N<K,V>({} as K, {} as V)
        this.tail = new N<K,V>({} as K, {} as V)
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    private insert(node : N<K,V>) : void {

    }

    remove(node: N<K,V>): void {

    }
    put(key : K, val: V): void {
        if (this.map.has(key)) {
            this.remove(this.map.get(key)!);
        }
        const node = new N(key, val);
        this.insert(node);
        this.map.set(key, node);

        if (this.map.size > this.capacity){
            
        }


    }
}