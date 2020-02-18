import MyQueue from "./MyQueue";

test("myQueue", () => {
  const queue = new MyQueue();
  expect(queue.empty()).toBe(true);

  queue.push(10);
  expect(queue.empty()).toBe(false);
  expect(queue.size()).toBe(1);
  expect(queue.peak()).toBe(10);
  expect(queue.size()).toBe(1);

  queue.push(11);
  expect(queue.empty()).toBe(false);
  expect(queue.size()).toBe(2);
  expect(queue.peak()).toBe(10);
  expect(queue.size()).toBe(2);

  expect(queue.pop()).toBe(10);
  expect(queue.empty()).toBe(false);
  expect(queue.size()).toBe(1);
  expect(queue.peak()).toBe(11);
  expect(queue.size()).toBe(1);

  expect(queue.pop()).toBe(11);
  expect(queue.empty()).toBe(true);
  expect(queue.size()).toBe(0);
  expect(queue.peak()).toBe(undefined);
});
