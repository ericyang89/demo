const isBracketsValid = (str: string) => {
  const items = str;
  const stack = [];
  const isValid = (stackItem: string, item: string) => {
    const maps = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
    return maps[stackItem] === item;
  };
  const getStackTop = (stack: any[]) => {
    if (stack.length === 0) return undefined;
    return stack[stack.length - 1];
  };

  let index = 0;
  while (index < items.length) {
    const stackItem = getStackTop(stack);
    const item = items[index];
    if (isValid(stackItem, item)) {
      stack.pop();
    } else {
      stack.push(item);
    }
    index++;
  }

  return stack.length === 0;
};

export default isBracketsValid;
