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
var rightSideView = function(A) {
    if(!A) return [];
    let result = [];
    
    function preordertraversal(root,level){
        if(root == null) return;
        if(result.length == level){
            result.push(root.val)
        }
        preordertraversal(root.right,level+1);
        preordertraversal(root.left,level+1);
    }
    
    preordertraversal(A,0);
    //console.log(result); 
    return result;
};