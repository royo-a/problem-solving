package solutions.leetcode;

class Solution {
    public int[] replaceElements(int[] arr) {
      // Assign max as the last element of the array
      int max = arr[arr.length - 1];
      // Put -1 at end of array
      arr[arr.length - 1] = -1;
      // For all elements starting from second last element to first
      for(int i=arr.length-2; i>=0; i--) {
        int copy = -1;
        // if current element is greater than copy
        if(arr[i] > max){
          // copy current element
          copy = arr[i];
        }
        // put max element at index
        arr[i] = max;
        // if copy exists
        if(copy != -1) {
          // make max element the copy
          max = copy;
        }
      }
      
      return arr;
    }
}