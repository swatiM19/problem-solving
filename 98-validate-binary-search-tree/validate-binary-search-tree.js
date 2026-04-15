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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return checkValidBST(root, -Infinity, Infinity);
};

var checkValidBST = function(root, minVal, maxVal){
    if(root == null) return true;
    if(root.val >= maxVal || root.val <= minVal) return false;
    return checkValidBST(root.left, minVal, root.val) && checkValidBST(root.right, root.val, maxVal)
};