/* #1
The goal is to return a boolean describing wether a passed in representation of a sodoku game is valid. 

Constraints:
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
- Each row must contain the digits 1-9 without repetition.

IDEATION:
make a loop that will divide the numbers into rows and columns 1-9 (soo,,, 18 arrays? YES 😭)
make a callback function that will verify each array as valid.

PROB: need to validate each 3x3.... this call back func is gonna be a DOOZY. 
to validte the 3x3's ill need to check the array by threes, and against each other! 

The logic will be like:
for each two arrays(divide the num of arrays by two? or manually set this up?), get the first three boxes, and validate the mumbers(this should be its own callback func), after this is validates, check the next three, and again.

if all checksout, the board is valid!!1
*/

function isValidSudoku(board) {

    const isArrayValidated = (arr) => {
        arr = arr.filter(el => el !== ".");
        if (arr.length !== new Set(arr).size) {
            return false;
        } else {
            return true;
        }
    };

    const colArrays = () => {
        const resultArr = [];
        for (let i = 0; i <= 8; i++) {
            resultArr.push(board.map(arr => arr[i][0]));
        }
        return resultArr;
    };

    const subBoxesArrays = () => {
        const resultArr = [];

        // i for the index of the board, j for the index inside the board, i could not figure any way to not literally brute force this solution, hence the huge switch case 😞
        for (let i = 0; i <= 8; i++) {
            let pushedArr = [];
            switch (i) {
                case 0:
                    for (let j = 0; j < 3; j++) {
                        pushedArr.push(...board[j].slice(0, 3));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 1:
                    for (let j = 0; j < 3; j++) {
                        pushedArr.push(...board[j].slice(3, 6));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 2:
                    for (let j = 0; j < 3; j++) {
                        pushedArr.push(...board[j].slice(6, 9));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 3:
                    for (let j = 3; j < 6; j++) {
                        pushedArr.push(...board[j].slice(0, 3));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 4:
                    for (let j = 3; j < 6; j++) {
                        pushedArr.push(...board[j].slice(3, 6));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 5:
                    for (let j = 3; j < 6; j++) {
                        pushedArr.push(...board[j].slice(6, 9));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 6:
                    for (let j = 6; j < 9; j++) {
                        pushedArr.push(...board[j].slice(0, 3));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 7:
                    for (let j = 6; j < 9; j++) {
                        pushedArr.push(...board[j].slice(3, 6));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
                case 8:
                    for (let j = 6; j < 9; j++) {
                        pushedArr.push(...board[j].slice(6, 9));
                    }
                    resultArr.push(pushedArr);
                    pushedArr = [];
                    break;
            }
        };
        return resultArr;
    };

    if (board.map(arr => isArrayValidated(arr)).includes(false)) {
        return false;
    } else if (colArrays().map(arr => isArrayValidated(arr)).includes(false)) {
        return false;
    } else if (subBoxesArrays().map(arr => isArrayValidated(arr)).includes(false)) {
        return false;
    } else {
        return true;
    }
}

// EXAMPLES

/* Output: true /*/
let board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

/* OUTPUT FALSE */
/*board =
    [
        [".", ".", ".", ".", "5", ".", ".", "1", "."],
        [".", "4", ".", "3", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", "3", ".", ".", "1"],
        ["8", ".", ".", ".", ".", ".", ".", "2", "."],
        [".", ".", "2", ".", "7", ".", ".", ".", "."],
        [".", "1", "5", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", "2", ".", ".", "."],
        [".", "2", ".", "9", ".", ".", ".", ".", "."],
        [".", ".", "4", ".", ".", ".", ".", ".", "."]];
*/

// call
console.log(isValidSudoku(board));

/*
Conclusion:
This was difficult, but I had a blast. When I took on the challenge I was unsure that I would be able to complete it, but with effort and the spirit of competition wit hmyself, I was able to succeed. I started with ideation because I seriously had no idea how I would even start such a task as this. I started by breaking down what can be done, and I slowly had more ideas on how to complete them.
*/
