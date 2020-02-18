import isBracketsValid from "./isBracketsValid";

test("()", () => {
  expect(isBracketsValid("()")).toBe(true);
});
test("()[]{}", () => {
  expect(isBracketsValid("()[]{}")).toBe(true);
});
test("(]", () => {
  expect(isBracketsValid("(]")).toBe(false);
});
test("([)]", () => {
  expect(isBracketsValid("([)]")).toBe(false);
});
test("{[]}", () => {
  expect(isBracketsValid("{[]}")).toBe(true);
});
test("{", () => {
  expect(isBracketsValid("{")).toBe(false);
});
