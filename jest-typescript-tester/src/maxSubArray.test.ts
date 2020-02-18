import maxSubArrayExhaustivity from "./maxSubArrayExhaustivity";
import maxSubArrayDynamicProgramming from "./maxSubArrayDynamicProgramming";

test("maxSubArrayExhaustivity", () => {
  const func = maxSubArrayExhaustivity;
  expect(func([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  expect(
    func([8, -2, -4, -1, -8, 3, 8, 8, 3, 4, 2, -9, -1, -3, -6, 8, -3, 9])
  ).toBe(28);
  expect(func([1])).toBe(1);
});

test("maxSubArrayDynamicProgramming", () => {
  const func = maxSubArrayDynamicProgramming;
  expect(func([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  expect(
    func([8, -2, -4, -1, -8, 3, 8, 8, 3, 4, 2, -9, -1, -3, -6, 8, -3, 9])
  ).toBe(28);
  expect(func([1])).toBe(1);
});
