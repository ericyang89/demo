class ListNode<T> {
  val: T;
  next: null | ListNode<T>;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export default ListNode;
