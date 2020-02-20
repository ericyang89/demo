export type Item = {
  id: number;
  parentId: number;
  name: String;
};
export type Node = Item & { children: Node[] };
const arrayToTree = (arr: Item[]) => {
  const [root] = arr.filter(item => item.parentId === null);
  if (!root) return null;

  const addChildren = (node: Item): Node => {
    const children = arr
      .filter(item => item.parentId === node.id)
      .map(item => addChildren(item));
    return { ...node, children };
  };
  return addChildren(root);
};

export default arrayToTree;
