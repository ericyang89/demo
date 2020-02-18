export default class TreeNode<T> {
  val: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
  constructor(item: T) {
    this.val = item;
    this.left = null;
    this.right = null;
  }
}
