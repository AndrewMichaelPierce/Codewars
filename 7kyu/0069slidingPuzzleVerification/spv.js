
function isSolved(board) {
    let size = board.length * board.length;
    let sizeResult = 0;
    for (let i = 0; i < size; i++) {
        sizeResult += i;
    }
    let boardTotal = 0;
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] == x * board.length + y) {
                boardTotal += board[x][y];
            } else {
                return false;
            }
        }
    }
    if (boardTotal == sizeResult) {
        return true;
    } else {
        return false;
    }
}

/*
Status: Solved
*/