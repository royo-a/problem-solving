/**
 * @param {string[]} strs
 * @return {string[][]}
 * 👉 Time complexity: O(m * nLogn), where m is no. of array elems
 * and n is avg length of strings in array.
 */
var groupAnagrams = function (strs) {
  const resultArray = [];
  const map = new Map();

  // for each string in the array
  strs.forEach((str) => {
    // sort and push it to a map
    const sortedStr = str.split('').sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    map.get(sortedStr).push(str);
  });

  // iterate through the map and push each group into another array
  for (let value of map.values()) {
    resultArray.push(value);
  }

  return resultArray;
};

groupAnagrams(['']);
groupAnagrams(['a']);
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
