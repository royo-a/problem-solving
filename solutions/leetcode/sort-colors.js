const swap = (nums, index1, index2) => {
  let swap = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = swap;
};

/**
 * O(n) time complexity, O(1) space complexity
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let currentIndex = 0;
  // get two pointers at beginning and end of array
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  // while currentIndex does not sort out everything
  while (currentIndex <= rightIndex) {
    // if current index contains two, swap with right index
    if (nums[currentIndex] === 2) {
      swap(nums, currentIndex, rightIndex);
      rightIndex--;
    } else if (nums[currentIndex] === 0) {
      // else if current index contains 0, swap with left index
      swap(nums, currentIndex, leftIndex);
      leftIndex++;
    }

    if (nums[currentIndex] === 1 || leftIndex > currentIndex) {
      currentIndex++;
    }
  }
};

// sortColors([2, 0, 2, 1, 1, 0]);
// sortColors([2, 0, 1]);
// sortColors([1, 2, 0]);
