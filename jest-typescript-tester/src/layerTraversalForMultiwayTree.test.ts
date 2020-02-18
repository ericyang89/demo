//layerTraversalForMultiwayTree.test.ts

import MultiwayTreeNode from "./MultiwayTreeNode";
import layerTraversalForMultiwayTree from "./layerTraversalForMultiwayTree";
import breadthFirstSearch from "./breadthFirstSearch";
import depthFirstSearch from "./depthFirstSearch";

test("layerTraversalForMultiwayTree", () => {
  /**
   *
   *       1
   *    /  ｜  \
   *   3   2    4
   *  / \
   * 5   6
   *
   */

  const node1 = new MultiwayTreeNode<number>(1, []);
  const node2 = new MultiwayTreeNode<number>(2, []);
  const node3 = new MultiwayTreeNode<number>(3, []);
  const node4 = new MultiwayTreeNode<number>(4, []);
  const node5 = new MultiwayTreeNode<number>(5, []);
  const node6 = new MultiwayTreeNode<number>(6, []);
  const tree = node1;
  tree.children = [node3, node2, node4];
  node3.children = [node5, node6];

  const result = [[1], [3, 2, 4], [5, 6]];

  expect(JSON.stringify(layerTraversalForMultiwayTree(tree))).toBe(
    JSON.stringify(result)
  );
  expect(JSON.stringify(breadthFirstSearch(tree))).toBe(JSON.stringify(result));
  expect(JSON.stringify(depthFirstSearch(tree))).toBe(JSON.stringify(result));
});
