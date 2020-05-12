/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  // 遍历到底还没有发现高度差超过 1 的左右子树，那么这个子树肯定符合平衡二叉树的规范
  if (!root) return true;
  const getHeight = (root) => {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
  };
  // 判断左右子树的高度差，如果超过 1 那么立即返回 false
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end

