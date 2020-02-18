import getBinaryTreeFromArray from "./getBinaryTreeFromArray";
import inorderTraversal from "./inorderTraversal";

test("inorderTraversal", () => {
  const tree = getBinaryTreeFromArray([1, null, 2, 3]);

  expect(tree.val).toBe(1);
  expect(tree.right.val).toBe(2);
  expect(tree.right.left.val).toBe(3);

  const expectResult = [1, 3, 2];

  const result = inorderTraversal(tree);
  expect(JSON.stringify(result)).toBe(JSON.stringify(expectResult));
});
