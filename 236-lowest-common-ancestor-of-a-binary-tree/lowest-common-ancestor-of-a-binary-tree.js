/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function findPath (root, node, path){
        if(root == null){
            return false;
        }
        path.push(root);
        if(root.val == node.val){
            return true;
        }
        if(findPath(root.left, node, path) || findPath(root.right, node, path)){
            return true;
        }
        path.pop();
        return false;
    }
    let pathP = []
    let pathQ = [];
    findPath(root, p, pathP)
    findPath(root, q, pathQ);
    //console.log(pathP, pathQ)
    let len = Math.min(pathP.length, pathQ.length);
    //console.log(pathP, pathQ, len)
    let lca = 0;
    for(let i=0; i<len; i++){
        if(pathP[i] == pathQ[i]){
            lca = pathP[i];
        } else {
            break;
        }
    }
    //console.log('lca',lca)
    return lca;
};