
function possibleRookMoves(chessboard, square, color) {

    let board = chessboard;
    let colorToMove;
    let colorAttacked;
    let mainRook = 0;
    let result = [];
    let colorInfluenceBoard;

    let rook = {
        white: "R",
        black: "r",
        whitePosition: [],
        blackPosition: []
    }

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

    let activePosition = [
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

    let whiteInfluence = [
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

    let blackInfluence = [
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

    let humanBoard = [
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200,"a8","b8","c8","d8","e8","f8","g8","h8", 200,
        200,"a7","b7","c7","d7","e7","f7","g7","h7", 200,
        200,"a6","b6","c6","d6","e6","f6","g6","h6", 200,
        200,"a5","b5","c5","d5","e5","f5","g5","h5", 200,
        200,"a4","b4","c4","d4","e4","f4","g4","h4", 200,
        200,"a3","b3","c3","d3","e3","f3","g3","h3", 200,
        200,"a2","b2","c2","d2","e2","f2","g2","h2", 200,
        200,"a1","b1","c1","d1","e1","f1","g1","h1", 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200
    ];

    function onMove(color) {
        if (color > 0) {
            colorToMove = "white";
            colorAttacked = "black";
        } else {
            colorToMove = "black";
            colorAttacked = "white";
        }
    }

    function chessboardConversion(chessboard) {
        for (let n = chessboard.length; n < 8; n++){
            for (let i = 1; i < (chessboard.length + 1); i++) {
                blankBoard[90 - ((n * 10)) + i] = 200;
                activePosition[90 - ((n * 10)) + i] = 200;
                whiteInfluence[90 - ((n * 10)) + i] = 200;
                blackInfluence[90 - ((n * 10)) + i] = 200;
            }
            
        }
        for (let b = 0; b < 8; b++ ) {
            for (let i = 1, len = chessboard.length; i < (9 - len); i++) {
                blankBoard[90 - ((b * 10)) + len + i] = 200;
                activePosition[90 - ((b * 10)) + len + i] = 200;
                whiteInfluence[90 - ((b * 10)) + len + i] = 200;
                blackInfluence[90 - ((b * 10)) + len + i] = 200;
            }
        }
    }
    
    function findPiece(chessboard) {
        let j = chessboard.length + "" + 0;
            j = parseInt(j);
            j = 90 - j + 1;
        for (let i = 0, len = chessboard.length; i < len; i++) {
            j += 10;
            for (let x = 0; x < len; x++) {
                let h = j + x;
                if (chessboard[i][x] > 0) {
                    rook.whitePosition.push(h);
                    activePosition[h] = "R";
                } else if (chessboard[i][x] < 0) {
                    rook.blackPosition.push(h);
                    activePosition[h] = "r";
                }
            }
        }
    }

    function placeRook() {
        for (let i = 21; i < 99; i++) {
            if (square === humanBoard[i]) {
                activePosition[i] = rook[colorToMove];
                mainRook = blankBoard[i];
            }
        }
    }

    function influenceConcat() {
        if (colorToMove === "white") {
            colorInfluenceBoard = whiteInfluence;
        } else {
            colorInfluenceBoard = blackInfluence;
        }
    }

    function RookPositions() {
        one:for (let i = mainRook; i === blankBoard[i]; i += 10) {
            if ((i + 10) === activePosition[i + 10] || activePosition[i + 10] === rook[colorAttacked]) {
                if (activePosition[i + 10] === rook[colorAttacked]) {
                    colorInfluenceBoard[i + 10] = "x";
                    break one;
                }
                colorInfluenceBoard[i + 10] = "x";
            } else {
                break one;
            }
        }
        two:for (let i = mainRook; i === blankBoard[i]; i -= 10) {
            if ((i - 10) === activePosition[i - 10] || activePosition[i - 10] === rook[colorAttacked]) {
                if (activePosition[i - 10] === rook[colorAttacked]) {
                    colorInfluenceBoard[i - 10] = "x";
                    break two;
                }
                colorInfluenceBoard[i - 10] = "x";
            } else {
                break two;
            }
        }
        three:for (let i = mainRook; i === blankBoard[i]; i++) {
            if ((i + 1) === activePosition[i + 1] || activePosition[i + 1] === rook[colorAttacked]) {
                if (activePosition[i + 1] === rook[colorAttacked]) {
                    colorInfluenceBoard[i + 1] = "x";
                    break three;
                }
                colorInfluenceBoard[i + 1] = "x";
            } else {
                break three;
            }
        }
        four:for (let i = mainRook; i === blankBoard[i]; i--) {
            if ((i - 1) === activePosition[i - 1] || activePosition[i - 1] === rook[colorAttacked]) {
                if (activePosition[i - 1] === rook[colorAttacked]) {
                    colorInfluenceBoard[i - 1] = "x";
                    break four;
                }
                colorInfluenceBoard[i - 1] = "x";
            } else {
                break four;
            }
        }
    }

    function calculateInfluence() {
        for (let i = 0; i < chessboard.length; i++) {
            RookPositions();
        }
    }

    function countUnattacked(colorInfluenceBoard) {
        for (let i = 21; i < 99; i++) {
            if (colorInfluenceBoard[i] === "x") {
                result.push(humanBoard[i]);
            }
        }
    }

    onMove(color);
    chessboardConversion(board);
    findPiece(chessboard);
    placeRook(square);
    influenceConcat();
    calculateInfluence();
    countUnattacked(colorInfluenceBoard);
    return result.sort();
}

/*
Status: Solved
*/