import { Item, Node } from "./index";
const TreeToArray = (root: Node) => {
  const result = [];
  const nodeToArray = (node: Node, result: Item[]) => {
    const { children, ...item } = node;
    result.push(item);
    node.children.forEach(node => nodeToArray(node, result));
  };
  nodeToArray(root, result);
  return result;
};

export default TreeToArray;
