// 二分法
const binarySearch = (arr: number[], target: number) => {
  const innerSearch = (
    array: number[],
    target: number,
    startIndex: number,
    endIndex: number
  ) => {
    const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const midValue = array[midIndex];
    if (target === midValue) return midIndex;
    if (startIndex >= endIndex) return -1;
    if (target > midValue) {
      return innerSearch(array, target, midIndex + 1, endIndex);
    }
    return innerSearch(array, target, startIndex, midIndex - 1);
  };
  return innerSearch(arr, target, 0, arr.length - 1);
};
export default binarySearch;
