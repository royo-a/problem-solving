
// Time complexity: O(nlogn)
// Recurrence relation: 2T(n/2) + O(n)
// Space complexity: O(n) for auxiliary array of size n | max call stack size: O(logn)+1
const mergeSort = (() => {

    function sortAndMerge(leftSubArray, rightSubArray) {
        let leftIndex = 0;
        let rightIndex = 0;

        let sortedArray = []

        // Compare items from left and right sub-arrays and push the smallest between them
        while (leftIndex < leftSubArray.length && rightIndex < rightSubArray.length){
            if (leftSubArray[leftIndex] < rightSubArray[rightIndex]){
                sortedArray.push(leftSubArray[leftIndex]);
                leftIndex++;
            } else {
                sortedArray.push(rightSubArray[rightIndex]);
                rightIndex++;
            }
        }

        // Push remaining elements from left array
        while (leftIndex < leftSubArray.length) {
            sortedArray.push(leftSubArray[leftIndex]);
            leftIndex++;
        }

        // Push remaining elements from right array
        while (rightIndex < rightSubArray.length){
            sortedArray.push(rightSubArray[rightIndex]);
            rightIndex++;
        }

        return sortedArray;
    }

    const mergeSortDriver = (array, start, end) => {
        // When array has one or no elements, return the array
        if (start >= end) {
            return [array[start]];
        }

        let mid = start + Math.floor((end - start) / 2);

        let leftSubArray = mergeSortDriver(array, start, mid);
        let rightSubArray = mergeSortDriver(array, mid+1, end);

        return sortAndMerge(leftSubArray, rightSubArray);
    }

    // The main function
    return (array) => {
        let start = 0;
        let end = array.length - 1;

        return mergeSortDriver(array, start, end);
    }
})();


// Test files
console.log(mergeSort([5, 2, 3, 7, 4]));
console.log(mergeSort([5, 2, 3, 7, 4, 20, 1, 16, 21, 20]));
console.log(mergeSort([5]));
console.log(mergeSort([]));
