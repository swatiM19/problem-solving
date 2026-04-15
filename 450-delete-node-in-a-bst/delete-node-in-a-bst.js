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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(root == null) return null;
        let current = root;
        if(root.val == key){
            return helper(root);
        }
        // search
        while(root !== null){
            if(root.val > key){
                if(root.left !== null && root.left.val == key){
                    root.left = helper(root.left);
                } else {
                    root = root.left;
                }
            } else {
                if(root.right !== null && root.right.val == key){
                    root.right = helper(root.right);
                } else {
                    root = root.right;
                }
            }
        }
        return current;
};
var helper = function(root){
        if(root.left == null){
            return root.right;
        } else if(root.right == null){
            return root.left;
        }
        let rightChild = root.right;
        let lastRightChild = findLastChild(root.left);
        lastRightChild.right = rightChild;
        return root.left;
}
var findLastChild = function(root){
        if(root.right == null){
            return root;
        }
        return findLastChild(root.right);
    }