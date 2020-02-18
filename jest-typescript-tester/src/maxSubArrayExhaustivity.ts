const maxSubArrayExhaustivity = (arr: number[]) => {
  let count = 1;
  let max = Number.MIN_SAFE_INTEGER;
  const len = arr.length;
  while (count <= len) {
    let start = 0;
    let end = count - 1;
    let sum = arr
      .filter((_item, index) => index >= start && index <= end)
      .reduce((pre, cur) => pre + cur);
    max = Math.max(sum, max);
    while (end < len - 1) {
      start++;
      end++;
      sum = sum - arr[start - 1] + arr[end];
      max = Math.max(sum, max);
    }
    count++;
  }
  return max;
};

export default maxSubArrayExhaustivity;
