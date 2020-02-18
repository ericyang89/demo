import Stack from "./Stack";
class MyQueue<T> {
  stackA: Stack<T>;
  stackB: Stack<T>;
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  push(item: T) {
    this.stackA.push(item);
  }
  _moveStackAToStackBIfNeeded() {
    if (this.stackB.empty()) {
      while (!this.stackA.empty()) {
        this.stackB.push(this.stackA.pop());
      }
    }
  }
  pop() {
    this._moveStackAToStackBIfNeeded();
    return this.stackB.pop();
  }
  peak() {
    this._moveStackAToStackBIfNeeded();
    return this.stackB.peak();
  }
  size() {
    return this.stackA.size() + this.stackB.size();
  }
  empty() {
    return this.size() === 0;
  }
}

export default MyQueue;
