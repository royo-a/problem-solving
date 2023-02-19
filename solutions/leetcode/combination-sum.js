const utility = (candidates, target, sum, array, tempArray, index) => {
  if (sum > target) {
    return;
  }

  if (sum === target) {
    array.push([...tempArray]);
  }

  while (index < candidates.length) {
    sum += candidates[index];
    tempArray.push(candidates[index]);

    utility(candidates, target, sum, array, tempArray, index);

    sum -= candidates[index];
    tempArray.pop();

    index++;
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result = [];
  let tempArray = [];
  utility(candidates, target, 0, result, tempArray, 0);

  return result;
};

console.log(combinationSum([2], 1));