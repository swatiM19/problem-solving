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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let kSmall = this.kthSmallest(root,k);
    // let kLargest = this.kthLargest(root,k);
    return kSmall;
};
var kthSmallest = function(root, k){
    let count = 0;
    let result = -1;
    const inorder = (node) => {
        if(node == null || count >= k) return
        inorder(node.left);
        count++;
        if(count == k){
            result = node.val;
            return;
        }
        inorder(node.right);
    }
    inorder(root,k);
    return result;
}