class Stack<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.pop();
  }
  peak() {
    return this.data[this.data.length - 1];
  }
  size() {
    return this.data.length;
  }
  empty() {
    return this.size() === 0;
  }
}

export default Stack;
