const climbingStarsDynamicProgramming = (n: number) => {
  if (n < 3) return n;
  let index = 3;
  let lastLast = 1;
  let last = 2;
  let current = lastLast + last;

  while (index < n) {
    index++;
    lastLast = last;
    last = current;
    current = last + lastLast;
  }
  return current;
};

export default climbingStarsDynamicProgramming;
