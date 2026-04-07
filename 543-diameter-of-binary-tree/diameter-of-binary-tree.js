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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    const traverse = (root) => {
        if(root == null) return 0;
        let lh = traverse(root.left);
        let rh = traverse(root.right);
        diameter = Math.max(diameter, lh+rh);
        return 1 + Math.max(lh,rh);
    }
    traverse(root);
    return diameter;
};
