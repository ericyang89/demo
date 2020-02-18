import MultiwayTreeNode from "./MultiwayTreeNode";
import Stack from "./Stack";
type StackItem = {
  depth: number;
  tree: MultiwayTreeNode<number>;
};
const depthFirstSearch = (root: MultiwayTreeNode<number>) => {
  const result = [];
  if (null === root) return result;
  const stack = new Stack<StackItem>();
  const pushResult = (val: number, depth: number) => {
    const layerResult = result[depth];
    if (Array.isArray(layerResult)) {
      layerResult.push(val);
    } else {
      result[depth] = [val];
    }
  };

  stack.push({ depth: 0, tree: root });

  while (stack.size() > 0) {
    const item = stack.pop();
    const tree = item.tree;
    const depth = item.depth;
    pushResult(tree.val, depth);
    tree.children.reverse().forEach(child => {
      stack.push({ depth: depth + 1, tree: child });
    });
  }

  return result;
};

export default depthFirstSearch;
