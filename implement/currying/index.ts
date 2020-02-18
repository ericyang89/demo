const currying = (func: Function) => {
  let args = [];
  const result = function(...innerArgs) {
    if (innerArgs.length === 0) {
      const realArgs = args;
      args = [];
      return func.apply(null, realArgs);
    }
    args = [...args, ...innerArgs];
    return result;
  };
  return result;
};

export default currying;
