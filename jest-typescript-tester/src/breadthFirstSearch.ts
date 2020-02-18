import MultiwayTreeNode from "./MultiwayTreeNode";
import Queue from "./Queue";
type QueueItem = {
  depth: number;
  tree: MultiwayTreeNode<number>;
};
const breadthFirstSearch = (root: MultiwayTreeNode<number>) => {
  const result = [];
  if (null === root) return result;
  const queue = new Queue<QueueItem>();
  const pushResult = (val: number, depth: number) => {
    const layerResult = result[depth];
    if (Array.isArray(layerResult)) {
      layerResult.push(val);
    } else {
      result[depth] = [val];
    }
  };

  queue.push({ depth: 0, tree: root });

  while (queue.size() > 0) {
    const item = queue.pop();
    const tree = item.tree;
    const depth = item.depth;
    pushResult(tree.val, depth);
    tree.children.forEach(child => {
      queue.push({ depth: depth + 1, tree: child });
    });
  }

  return result;
};

export default breadthFirstSearch;
