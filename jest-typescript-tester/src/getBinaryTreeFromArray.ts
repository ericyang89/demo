import Queue from "./Queue";
import TreeNode from "./TreeNode";
const getBinaryTreeFromArray = (arr: any[]) => {
  let arrIndex = 0;
  let tree = null;
  const queue = new Queue<TreeNode<any>>();
  while (arrIndex < arr.length) {
    const item = arr[arrIndex];
    const treeNode = item === null ? null : new TreeNode(item);

    if (arrIndex === 0) {
      tree = treeNode;
    } else if (arrIndex % 2 === 1) {
      const parent = queue.peak();
      parent.left = treeNode;
    } else {
      const parent = queue.pop();
      parent.right = treeNode;
    }

    if (item !== null) {
      queue.push(treeNode);
    }
    arrIndex++;
  }
  return tree;
};

export default getBinaryTreeFromArray;
