class Queue<T> {
  data: T[];
  constructor() {
    this.data = [];
  }
  push(item: T) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
  peak() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  empty() {
    return this.size() === 0;
  }
}

export default Queue;
