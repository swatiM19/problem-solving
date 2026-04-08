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
var maxPathSum = function(root) {
    let pathSum = -Infinity;
    function calSum(root) {
        if(root == null) return 0;
        let leftSum = Math.max(0,calSum(root.left));
        let rightSum = Math.max(0,calSum(root.right));
        pathSum = Math.max(pathSum, root.val+leftSum+rightSum)
        return root.val + Math.max(leftSum, rightSum); 
    }
    calSum(root);
    return pathSum
};