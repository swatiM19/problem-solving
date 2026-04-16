/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

class BSTIterator {
    constructor(root, isReverse) {
        this.reverse = isReverse; 
        this.stack = [];
        this.pushAll(root);
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        let top = this.stack.pop();
        if(this.reverse == false) {
            this.pushAll(top.right);
        } else {
            this.pushAll(top.left);
        }
        return top.val;
    }
    pushAll(root) {
        while(root !== null){
            this.stack.push(root);
            if(this.reverse == true){
                root = root.right;
            } else {
                root = root.left;
            }
        }
    }
}

var findTarget = function(root, k) {
    if(root == null) return false;
        let l = new BSTIterator(root, false);
        let r = new BSTIterator(root, true);
        let i = l.next();
        let j = r.next();
        while(i < j){
            if(i + j == k) return true;
            else if(i+j < k){
                i = l.next();
            } else {
                j = r.next();
            }
        }
        return false;
};
// class Solution {
//     twoSumBST(root, k) {
//         if(root == null) return false;
//         let l = new BSTIterator(root, false);
//         let r = new BSTIterator(root, true);
//         let i = l.next();
//         let j = r.next();
//         while(i < j){
//             if(i + j == k) return true;
//             else if(i+j < k){
//                 i = l.next();
//             } else {
//                 j = r.next();
//             }
//         }
//         return false;
//     }
// }