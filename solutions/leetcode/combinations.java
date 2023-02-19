import java.util.ArrayList;
import java.util.List;

class Solution {
    public static void utility(int n, int k, int index, int num, List list, List array) {
        if (index == k) {
            List tempList = List.copyOf(list);
            array.add(tempList);

            return;
        }

        while (num <= n) {
            list.add(num);
            utility(n, k, index + 1, ++num, list, array);
            list.remove(list.size() - 1);
        }
    }

    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> array = new ArrayList<>();
        List<Integer> list = new ArrayList<>();

        utility(n, k, 0, 1, list, array);

        return array;
    }

//    public static void main(String[] args) {
//        Solution s = new Solution();
//        List<List<Integer>> list = s.combine(1, 1);
//
//        System.out.println(list);
//    }
}