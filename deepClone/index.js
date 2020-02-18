const deepClone = source => {
  if (null === source || undefined === source || "object" !== typeof source) {
    return source;
  }

  if (Array.isArray(source)) {
    return source.map(deepClone);
  }

  //日期
  if (Object.prototype.toString.call(source) === "[object Date]") {
    return new Date(source);
  }

  //对象
  return Object.keys(source).reduce((pre, cur) => {
    pre[cur] = deepClone(source[cur]);
    return pre;
  }, {});
};

//test

const tests = [
  null,
  [],
  {},
  [1, 2, 3],
  [1, 2, 3, null],
  // [1,2,3, null, {a:2,b:[1]}],
  [new Date("2001-01-01")], // FAIL doesn't work with Date
  { x: "", y: { yx: "zz", yy: null }, z: [1, 2, 3, null] },
  {
    obj: function() {
      this.name = "Object test";
    }
  } // FAIL doesn't handle functions
];
// console
tests.map((x, i) => console.log(i, deepClone(x)));
tests.map((x, i) => console.log(i, x));
