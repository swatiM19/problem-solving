/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let mp = new Map();
    let children = new Set();

    for(const [parent, child, isLeft] of descriptions){
        if(!mp.has(parent)){
            mp.set(parent, new TreeNode(parent));
        }
        if(!mp.has(child)){
            mp.set(child, new TreeNode(child));
        }
        if(isLeft){
            mp.get(parent).left = mp.get(child);
        } else {
            mp.get(parent).right = mp.get(child)
        }
        children.add(child)
    }
    for(const [parent] of descriptions){
        if(!children.has(parent)){
            return mp.get(parent);
        }   
    }
    return null;
};