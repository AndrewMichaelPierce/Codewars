
function chessBoard(rows, columns) {
    let result = [];
    let row = [];
    let change = 2;
    for (let x = 0; x < rows; x++) {
        for (let i = 0; i < columns; i++) {
            if (change % 2 === 0) {
                row.push("O");
            } else {
                row.push("X");
            }
            if (change === 2) {
                change = 3;
            } else {
                change = 2;
            }
        }
        result.push(row);
        row = [];
        if (x === 0 || x % 2 === 0) {
            change = 3;
        } else {
            change = 2;
        }
    }
    console.log(result);
    return result;
}
chessBoard(2, 2);

/*
Status: Solved
*/