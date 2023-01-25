package solutions.leetcode;

class Solution {
  public int lengthOfLastWord(String s) {
    int result = 0;
    int index = s.length()-1;
    int count = 0;

    // skip white space from end
    while(index >= 0 && s.charAt(index) == ' ') {
      index--;
    }   

    // count length of last word
    while(index >= 0 && s.charAt(index) != ' '){
      count++;
      index--;
    }

    return count;
  }
}
  