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
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    private remove(node: N<K,V>): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }
    put(key : K, val: V): void {
        if (this.map.has(key)) {
            this.remove(this.map.get(key)!);
        }
        const node = new N(key, val);
        this.insert(node);
        this.map.set(key, node);

        if (this.map.size > this.capacity){
            const lru = this.tail.prev!;
            this.remove(lru);
            this.map.delete(lru.key);
        }

        
    }
    get(key: K): V | -1 {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key)!;
        this.remove(node);
        this.insert(node);
        return node.val;
    }
} 

const cache = new LRUCache<number, string>(2);

cache.put(1, "A");
cache.put(2, "B");
console.log(cache.get(1)); // A
cache.put(3, "C");         // Evicts key 2
console.log(cache.get(2)); // -1
console.log(cache.get(3)); // C