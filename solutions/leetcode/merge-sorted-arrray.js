/**
 * Time complexity: O(n), space complexity: O(n)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // we start putting elements from end of nums1
  let index = nums1.length - 1;
  // while nums1 and nums2 both have elements
  while (m > 0 && n > 0) {
    // check which element is largest among two arrays and place
    // largest element at index beginning from end of nums1
    if (nums1[m - 1] >= nums2[n - 1]) {
      nums1[index] = nums1[m - 1];
      m--;
    } else {
      nums1[index] = nums2[n - 1];
      n--;
    }

    index--;
  }

  // if nums2 contain elements, put rest of the elements in num 1
  while (n > 0) {
    nums1[index] = nums2[n - 1];
    n--;
    index--;
  }

  // console.log(nums1);
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([1], 1, [], 0);
// merge([0], 0, [1], 1);
