import ListNode from "./ListNode";
const reverseListRecursive = (head: ListNode<number>) => {
  if (null === head || head.next === null) return head;
  const p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

export default reverseListRecursive;
