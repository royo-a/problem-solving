/**
 * O(N) time and space complexity
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  const set = new Set();
  // Insert all elements in set
  for (let x of nums) {
    set.add(x);
  }

  // For each element in array,
  for (let x of nums) {
    let count = 1;

    // Check if there's a positive sequence
    let num = x + 1;
    while (true) {
      if (!set.has(num)) {
        break;
      }

      // Remove each number in sequence from set
      set.delete(num);
      num++;
      count++;
    }

    // Check if there's a negative sequence
    num = x - 1;
    while (true) {
      if (!set.has(num)) {
        break;
      }

      // Remove each number in sequence from set
      set.delete(num);
      num--;
      count++;
    }

    if (max < count) {
      max = count;
    }
  }

  return max;
};
