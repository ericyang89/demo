// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

import getBinaryTreeFromArray from "./getBinaryTreeFromArray";
import layerTraversal from "./layerTraversal";

test("layerTraversal", () => {
  const tree = getBinaryTreeFromArray([3, 9, 20, null, null, 15, 7]);

  expect(tree.val).toBe(3);
  expect(tree.left.val).toBe(9);
  expect(tree.right.val).toBe(20);
  expect(tree.right.left.val).toBe(15);
  expect(tree.right.right.val).toBe(7);

  const expectResult = [[3], [9, 20], [15, 7]];

  const result = layerTraversal(tree);
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectResult));
});
