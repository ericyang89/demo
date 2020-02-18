const climbingStarsRecursive = (n: number) => {
  if (n < 3) return n;
  return climbingStarsRecursive(n - 1) + climbingStarsRecursive(n - 2);
};

export default climbingStarsRecursive;
