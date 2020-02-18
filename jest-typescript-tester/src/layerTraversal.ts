import TreeNode from "./TreeNode";
const layerTraversal = (root: TreeNode<any>) => {
  const result = [];
  const traversal = (tree: TreeNode<any>, deepth = 0) => {
    if (null === tree) return;
    traversal(tree.left, deepth + 1);
    // result.push(tree.val);
    const layerResult = result[deepth];
    if (Array.isArray(layerResult)) {
      layerResult.push(tree.val);
    } else {
      result[deepth] = [tree.val];
    }
    traversal(tree.right, deepth + 1);
  };
  traversal(root);
  return result;
};

export default layerTraversal;
