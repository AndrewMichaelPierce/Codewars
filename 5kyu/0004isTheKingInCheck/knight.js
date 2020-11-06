
function possiblePositions(str) {
    let numericSquare = 0;
    let Npositions = [];
    for (let i = 0; i < humanBoard.length; i++) {
        if (str === humanBoard[i]) {
            numericSquare = blankBoard[i];
        }
    }
    if (blankBoard[numericSquare + 8] !== 100) {
        Npositions.push(humanBoard[numericSquare + 8]);
    }
    if (blankBoard[numericSquare - 12] !== 100) {
        Npositions.push(humanBoard[numericSquare - 12]);
    }
    if (blankBoard[numericSquare + 19] !== 100) {
        Npositions.push(humanBoard[numericSquare + 19]);
    }
    if (blankBoard[numericSquare - 21] !== 100) {
        Npositions.push(humanBoard[numericSquare - 21]);
    }
    if (blankBoard[numericSquare + 21] !== 100) {
        Npositions.push(humanBoard[numericSquare + 21]);
    }
    if (blankBoard[numericSquare - 19] !== 100) {
        Npositions.push(humanBoard[numericSquare - 19]);
    }
    if (blankBoard[numericSquare + 12] !== 100) {
        Npositions.push(humanBoard[numericSquare + 12]);
    }
    if (blankBoard[numericSquare - 8] !== 100) {
        Npositions.push(humanBoard[numericSquare - 8]);
    }
    return Npositions;
}