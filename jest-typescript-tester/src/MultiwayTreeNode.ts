//MultiwayTreeNode.ts
class MultiwayTreeNode<T> {
  val: T;
  children: MultiwayTreeNode<T>[];
  constructor(val: T, children: MultiwayTreeNode<T>[] = []) {
    this.val = val;
    this.children = children;
  }
}

export default MultiwayTreeNode;
