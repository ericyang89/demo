const fackBind = (func, that, ...args) => {
  return function(...otherArgs) {
    return func.apply(that, [...args, ...otherArgs]);
  };
};

export default fackBind;
