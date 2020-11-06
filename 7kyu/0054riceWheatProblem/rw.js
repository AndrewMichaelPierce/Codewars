
function squaresNeeded(grains) {
    let chessboard = [];
    let rice = 1;
    if (grains <= 0) {
        return 0;
    }
    for (let i = 0; i < 64; i++) {
        if (i > 0) {
            rice = rice + rice;
        }
        chessboard[i] = rice;
    }
    for (let x = 0; x < 64; x++) {
        if (grains == chessboard[x - 1]) {
            return x;
        } else if (grains < chessboard[x]) {
            return x;
        }
    }
}
squaresNeeded(64);
