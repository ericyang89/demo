import TreeNode from "./TreeNode";
const inorderTraversal = (root: TreeNode<any>) => {
  const result = [];
  const traversal = (tree: TreeNode<any>) => {
    if (null === tree) return;
    traversal(tree.left);
    result.push(tree.val);
    traversal(tree.right);
  };
  traversal(root);
  return result;
};

export default inorderTraversal;
