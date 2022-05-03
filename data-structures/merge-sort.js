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
        if (start === end) {
            return array;
        }

        let mid = start + Math.floor((end - start) / 2);

        let leftSubArray = mergeSortDriver(array, start, mid);
        let rightSubArray = mergeSortDriver(array, mid+1, end);

        return sortAndMerge(leftSubArray, rightSubArray);
    }

    // The main algorithm
    return (array) => {
        let start = 0;
        let end = array.length - 1;

        mergeSortDriver(array, start, end);
    }
})();