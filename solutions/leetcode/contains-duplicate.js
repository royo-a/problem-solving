/**
 * @param {number[]} nums
 * @return {boolean}
 * O(n) space and time complexity
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  let ifContainsDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      ifContainsDuplicate = true;
    }

    set.add(nums[i]);
  }

  return ifContainsDuplicate;
};

// console.log(containsDuplicate([1, 2, 3]));
