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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    let path = [];
    function dfs(root, path, paths){
        if(root == null) return false;
        path.push(root.val);
        // path.push(root.val + "->");
        if(root.left == null && root.right == null){
            // paths.push([...path])
            paths.push(path.join("->")) 
        } else {
            dfs(root.left, path, paths);
            dfs(root.right, path, paths)
        }
        path.pop()
    }
    dfs(root, path, paths);
    return paths;
};