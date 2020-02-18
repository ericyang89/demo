const climbingStarsExhaustivity = (n: number) => {
  const factorial = (m: number) => {
    if (m <= 1) return 1;
    return m * factorial(m - 1);
  };
  const maxTwoStep = Math.floor(n / 2);
  const arr = Array.from({ length: maxTwoStep + 1 }, (_, index) => index);
  const arrCount = arr.map(item => {
    return factorial(n - item) / (factorial(item) * factorial(n - 2 * item));
  });
  const result = arrCount.reduce((pre, cur) => pre + cur, 0);

  return result;
};

export default climbingStarsExhaustivity;
