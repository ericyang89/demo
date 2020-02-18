import getBinaryTreeFromArray from "./getBinaryTreeFromArray";

test("getBinaryTreeFromArray", () => {
  const tree1 = getBinaryTreeFromArray([]);
  expect(tree1).toBe(null);

  const tree2 = getBinaryTreeFromArray([1, 2, 3]);
  expect(tree2.val).toBe(1);
  expect(tree2.left.val).toBe(2);
  expect(tree2.right.val).toBe(3);

  const tree3 = getBinaryTreeFromArray([1, null, 2, 3]);
  expect(tree3.val).toBe(1);
  expect(tree3.right.val).toBe(2);
  expect(tree3.right.left.val).toBe(3);

  const tree4 = getBinaryTreeFromArray([
    5,
    4,
    7,
    3,
    null,
    2,
    null,
    -1,
    null,
    9
  ]);
  expect(tree4.val).toBe(5);
  expect(tree4.left.val).toBe(4);
  expect(tree4.left.left.val).toBe(3);
  expect(tree4.left.left.left.val).toBe(-1);
  expect(tree4.right.val).toBe(7);
  expect(tree4.right.left.val).toBe(2);
  expect(tree4.right.left.left.val).toBe(9);
});
