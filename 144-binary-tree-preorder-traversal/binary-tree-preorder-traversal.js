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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let stack = [];
    let result = [];
    if(root == null) return [];
    stack.push(root);
    while(stack.length !== 0){
        let top = stack.pop();
        result.push(top.val);
        if(top.right){
            stack.push(top.right);
        }
        if(top.left){
            stack.push(top.left);
        }
    }
    return result;
};