const fackNew = (func: Function, ...args) => {
  // 1.创建一个空对象
  // 2.链接到原型
  // 3.绑定this值
  // 4.返回新对象
  let result = {};
  const functionResult = func.apply(result, args);
  if (undefined !== functionResult) {
    result = functionResult;
  }
  //@ts-ignore
  result.__proto__ = func.prototype;
  return result;
};
