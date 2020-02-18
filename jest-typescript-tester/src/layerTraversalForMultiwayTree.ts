//layerTraversalForMultiwayTree.ts
import MultiwayTreeNode from "./MultiwayTreeNode";

const layerTraversalForMultiwayTree = (root: MultiwayTreeNode<number>) => {
  const result = [];
  const traversal = (tree: MultiwayTreeNode<number>, deepth = 0) => {
    if (null === tree) return;
    const layerResult = result[deepth];
    if (Array.isArray(layerResult)) {
      layerResult.push(tree.val);
    } else {
      result[deepth] = [tree.val];
    }

    tree.children.forEach(item => {
      traversal(item, deepth + 1);
    });
  };
  traversal(root);
  return result;
};

export default layerTraversalForMultiwayTree;
