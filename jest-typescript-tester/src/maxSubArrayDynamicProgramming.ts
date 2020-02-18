const maxSubArrayDynamicProgramming = (arr: number[]) => {
  let max = Number.MIN_SAFE_INTEGER;
  let currentEndMax = arr[0];
  let index = 1;
  max = Math.max(currentEndMax, max);
  while (index < arr.length) {
    if (currentEndMax > 0) {
      currentEndMax = currentEndMax + arr[index];
    } else {
      currentEndMax = arr[index];
    }
    max = Math.max(currentEndMax, max);
    index++;
  }
  return max;
};
export default maxSubArrayDynamicProgramming;
