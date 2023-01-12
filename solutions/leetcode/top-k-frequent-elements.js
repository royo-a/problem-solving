/**
 * Time complexity: O(N)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Count the occurences
  const map = new Map();
  nums.forEach((num) => {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  });

  // Sort the occurences
  const bucket = [];
  map.forEach((count, number) => {
    if (!bucket[count]) {
      bucket[count] = [];
    }

    bucket[count].push(number);
  });

  // Return top k occurences
  const result = [];
  let index = nums.length;
  while (k > 0) {
    if (bucket[index]?.length > 0) {
      result.push(bucket[index].pop());
      k--;
    } else {
      index--;
    }
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3, 5, 5, 5, 5, 5], 3));
console.log(
  topKFrequent([1, 1, 1, 2, 2, 2, 3, 5, 5, 5, 5, 5, 10, 15, 15, 3, 3, 3], 4)
);
