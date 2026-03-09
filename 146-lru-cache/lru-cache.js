class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.left = new Node(0, 0);  // LRU sentinel
        this.right = new Node(0, 0); // MRU sentinel
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Insert node at MRU position (before right)
    insert(node) {
        let prev = this.right.prev;
        let next = this.right;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }

    // Remove node from current position
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        let node = new Node(key, value);
        this.insert(node);
        this.cache.set(key, node);

        if (this.cache.size > this.capacity) {
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}