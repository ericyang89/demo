import ListNode from "./ListNode";
const reverseList = (head: ListNode<number>) => {
  if (null === head) return head;
  let cur = head;
  let next = head.next;
  let result = null;

  while (null !== next) {
    cur.next = result;
    result = cur;
    cur = next;
    next = next.next;
  }
  cur.next = result;
  return cur;
};

export default reverseList;
