const cache = {};
const climbingStarsRecursiveCache = (n: number) => {
  let result = n;
  if (n < 3) return result;
  if (cache[n] !== undefined) {
    result = cache[n];
  } else {
    result =
      climbingStarsRecursiveCache(n - 1) + climbingStarsRecursiveCache(n - 2);
    cache[n] = result;
  }
  return result;
};

export default climbingStarsRecursiveCache;
