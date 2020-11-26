
function possibleRookMoves(chessboard, square, color) {
    let board = chessboard;
    let x;
    let onMove = color => color > 0 ? x = "white" : x = "black";
    onMove(color);
    console.log(x);

    let rook = {
        white: "R",
        black: "r",
        whitePosition: [],
        blackPosition: []
    }

    let bishop = {
        white: "B",
        black: "b",
        whitePosition: [],
        blackPosition: []
    }

    console.log(bishop[x]);

    let blankBoard = [
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200,  21,  22,  23,  24,  25,  26,  27,  28, 200,
        200,  31,  32,  33,  34,  35,  36,  37,  38, 200,
        200,  41,  42,  43,  44,  45,  46,  47,  48, 200,
        200,  51,  52,  53,  54,  55,  56,  57,  58, 200,
        200,  61,  62,  63,  64,  65,  66,  67,  68, 200,
        200,  71,  72,  73,  74,  75,  76,  77,  78, 200,
        200,  81,  82,  83,  84,  85,  86,  87,  88, 200,
        200,  91,  92,  93,  94,  95,  96,  97,  98, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200
    ];
    function chessboardConversion(chessboard) {
        for (let n = chessboard.length; n < 8; n++){
            for (let i = 1; i < (chessboard.length + 1); i++) {
                blankBoard[90 - ((n * 10)) + i] = 'u';
            }
        }
        for (let b = 0; b < 8; b++ ) {
            for (let i = 1, len = chessboard.length; i < (9 - len); i++) {
                blankBoard[90 - ((b * 10)) + len + i] = 'S';
            }
        }
        
        
    }
    chessboardConversion(board);
}

possibleRookMoves([
    [ 0, 1, 0,-1, 0], 
    [ 0, 0,-1, 0, 0], 
    [ 0, 0, 0, 0, 0], 
    [ 0, 0, 0, 0, 0], 
    [-1, 0, 1, 1, 0]],"c5",-1),["c4","d5"];