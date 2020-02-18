import Stack from "./Stack";

test("stack", () => {
  const stack = new Stack();
  expect(stack.empty()).toBe(true);

  stack.push(10);
  expect(stack.empty()).toBe(false);
  expect(stack.size()).toBe(1);
  expect(stack.peak()).toBe(10);
  expect(stack.size()).toBe(1);

  stack.push(11);
  expect(stack.empty()).toBe(false);
  expect(stack.size()).toBe(2);
  expect(stack.peak()).toBe(11);
  expect(stack.size()).toBe(2);

  expect(stack.pop()).toBe(11);
  expect(stack.empty()).toBe(false);
  expect(stack.size()).toBe(1);
  expect(stack.peak()).toBe(10);
  expect(stack.size()).toBe(1);

  expect(stack.pop()).toBe(10);
  expect(stack.empty()).toBe(true);
  expect(stack.size()).toBe(0);
  expect(stack.peak()).toBe(undefined);
});
