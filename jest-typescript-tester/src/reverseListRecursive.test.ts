import ListNode from "./ListNode";
import reverseListRecursive from "./reverseListRecursive";

test("reverseListRecursive", () => {
  expect(reverseListRecursive(null)).toBe(null);

  const oneNodeLink = new ListNode(4);
  const reversedOneNodeLink = reverseListRecursive(oneNodeLink);
  expect(oneNodeLink.val).toBe(reversedOneNodeLink.val);
  expect(oneNodeLink.val).toBe(4);

  const head = [1, 2, 3, 4, 5].reduceRight(
    (pre: null | ListNode<number>, cur) => {
      const node = new ListNode(cur);
      node.next = pre;
      return node;
    },
    null
  );

  expect(head.val).toBe(1);
  expect(head.next.val).toBe(2);
  expect(head.next.next.val).toBe(3);
  expect(head.next.next.next.val).toBe(4);
  expect(head.next.next.next.next.val).toBe(5);
  expect(head.next.next.next.next.next).toBe(null);

  const reversedList = reverseListRecursive(head);

  expect(reversedList.val).toBe(5);
  expect(reversedList.next.val).toBe(4);
  expect(reversedList.next.next.val).toBe(3);
  expect(reversedList.next.next.next.val).toBe(2);
  expect(reversedList.next.next.next.next.val).toBe(1);
  expect(reversedList.next.next.next.next.next).toBe(null);
});
