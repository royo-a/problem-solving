/**
 * Time complexity: O(N)
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let isValid = true;

  // check all rows for duplicates
  for (let row = 0; row < 9 && isValid; row++) {
    let set = new Set();
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') continue;

      if (set.has(board[row][col])) {
        isValid = false;
        break;
      }

      set.add(board[row][col]);
    }
  }

  // check all columns for duplicates
  for (let col = 0; col < 9 && isValid; col++) {
    let set = new Set();
    for (let row = 0; row < 9; row++) {
      if (board[row][col] === '.') continue;

      if (set.has(board[row][col])) {
        isValid = false;
        break;
      }

      set.add(board[row][col]);
    }
  }

  // check the grids
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let row = 1; row < 9 && isValid; row += 3) {
    for (let col = 1; col < 9 && isValid; col += 3) {
      let set = new Set();
      for (let dirIndex = 0; dirIndex < 9; dirIndex++) {
        let gridCoords = directions[dirIndex];

        if (board[row + gridCoords[0]][col + gridCoords[1]] === '.') continue;

        if (set.has(board[row + gridCoords[0]][col + gridCoords[1]])) {
          isValid = false;
          break;
        }

        set.add(board[row + gridCoords[0]][col + gridCoords[1]]);
      }
    }
  }

  return isValid;
};

let answer = isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);

answer = isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);

console.log(answer);
