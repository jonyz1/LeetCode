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
var isBalanced = function(root) {
    function check(node) {
        if (node === null) return 0;

        let left = check(node.left);
        if (left === -1) return -1; // left subtree is not balanced

        let right = check(node.right);
        if (right === -1) return -1; // right subtree is not balanced

        if (Math.abs(left - right) > 1) return -1; // current node not balanced

        return Math.max(left, right) + 1; // return height
    }

    return check(root) !== -1;
};
