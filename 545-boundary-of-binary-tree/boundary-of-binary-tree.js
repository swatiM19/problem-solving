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
var boundaryOfBinaryTree = function(root) {
    let result = [];
    if(root == null) return result;
    if(isLeafNode(root) == false){
        result.push(root.val);
    }
    addLeftBoundary(root, result);
    addLeafNodes(root, result);
    addRightBoundary(root, result);
    return result;
};
var isLeafNode = function(root){
    if(root.left == null && root.right == null) 
        return true;
    else return false;
}

var addLeftBoundary = function(root, result){
    let curr = root.left;
    while(curr !== null){
        if(isLeafNode(curr) == false){
            result.push(curr.val);
        }
        if(curr.left !== null){
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
}

var addLeafNodes = function(root, result){
    if(root == null) return;
    if(isLeafNode(root)){
        result.push(root.val)
    }
    addLeafNodes(root.left, result);
    addLeafNodes(root.right, result);
}
var addRightBoundary = function(root, result){
    let curr = root.right;
    let temp = [];
    while(curr !== null){
        if(isLeafNode(curr) == false){
            temp.push(curr.val);
        }
        if(curr.right !== null){
            curr = curr.right;
        } else {
            curr = curr.left;
        }
    }
    for(let i=temp.length-1; i>=0; i--){
        result.push(temp[i]);
    }
}