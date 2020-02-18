import currying from "./index";
const sum = (...args) => {
  return args.reduce((pre, cur) => pre + cur);
};

test("sum", () => {
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(1, 2)).toBe(3);
});

test("3 param", () => {
  const curryingSum = currying(sum);
  expect(curryingSum(1, 2, 3)()).toBe(6);
  expect(curryingSum(1)(2)(3)()).toBe(6);
});
