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
var widthOfBinaryTree = function(root) {
    if(root == null) return 0;
        let result = 0;
        let queue = [{node: root, index: 0}];
        while(queue.length > 0){
            let minIdx = queue[0].index; 
            let first, last;
            let len = queue.length;
            for(let i=0; i<len; i++){
                let { node, index } = queue.shift();
                let currIdx = index - minIdx;
                if (i == 0){
                    first = currIdx;
                }
                if(i == len-1){
                    last = currIdx;
                }
                if(node.left){
                    queue.push({node:node.left, index: currIdx*2+1})
                }
                if(node.right){
                    queue.push({node:node.right, index: currIdx*2+2})
                }
            }
            result = Math.max(result, last-first+1);
        }
        return result;
};