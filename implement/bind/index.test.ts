import fackBind from "./index";
test("bind function", () => {
  const fun = (a, b, c) => a + b + c;
  const result = fun.bind(null, 1, 2);
  expect(result(3)).toBe(6);
});
test("fackbind param", () => {
  const fun = (a, b, c) => a + b + c;
  const result = fackBind(fun, null, 1, 2);
  expect(result(3)).toBe(6);
});
test("fackbind param", () => {
  const context = { a: 1 };
  const fun = function() {
    return this.a;
  };
  const result = fackBind(fun, context);
  expect(result()).toBe(1);
});
