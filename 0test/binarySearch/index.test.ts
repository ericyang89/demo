import binarySearch from "./index";

test("[1,4,6,87,99,101] search 4 index 1", () => {
  expect(binarySearch([1, 4, 6, 87, 99, 101], 4)).toBe(1);
});

test("[1,4,6,87,99,101,9999,234324] search 9999 index 6", () => {
  expect(binarySearch([1, 4, 6, 87, 99, 101, 9999, 234324], 9999)).toBe(6);
});
test("[1,4,6,87,99,101,9999,234324] search 999 index -1", () => {
  expect(binarySearch([1, 4, 6, 87, 99, 101, 9999, 234324], 999)).toBe(-1);
});
