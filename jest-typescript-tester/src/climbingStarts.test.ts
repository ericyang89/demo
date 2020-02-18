import climbingStarsExhaustivity from "./climbingStarsExhaustivity";
import climbingStarsRecursive from "./climbingStarsRecursive";
import climbingStarsRecursiveCache from "./climbingStarsRecursiveCache";
import climbingStarsDynamicProgramming from "./climbingStarsDynamicProgramming";

test("climbingStarsExhaustivity", () => {
  const func = climbingStarsExhaustivity;
  expect(func(1)).toBe(1);
  expect(func(2)).toBe(2);
  expect(func(3)).toBe(3);
  expect(func(10)).toBe(89);
  expect(func(11)).toBe(144);
});

test("climbingStarsRecursive", () => {
  const func = climbingStarsRecursive;
  expect(func(1)).toBe(1);
  expect(func(2)).toBe(2);
  expect(func(3)).toBe(3);
  expect(func(10)).toBe(89);
  expect(func(11)).toBe(144);
});

test("climbingStarsRecursiveCache", () => {
  const func = climbingStarsRecursiveCache;
  expect(func(1)).toBe(1);
  expect(func(2)).toBe(2);
  expect(func(3)).toBe(3);
  expect(func(10)).toBe(89);
  expect(func(11)).toBe(144);
});
test("climbingStarsDynamicProgramming", () => {
  const func = climbingStarsDynamicProgramming;
  expect(func(1)).toBe(1);
  expect(func(2)).toBe(2);
  expect(func(3)).toBe(3);
  expect(func(10)).toBe(89);
  expect(func(11)).toBe(144);
});
