import sum from "./sum";

test("1+2=3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("0.1+0.2=0.3", () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});
