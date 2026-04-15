/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.pushAll(root);
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        let top = this.stack.pop();
        this.pushAll(top.right);
        return top.val;
    }
    pushAll(root) {
        while(root !== null){
            this.stack.push(root);
            root = root.left;
        }
    }
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */