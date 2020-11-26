
function check(board) {
    
    let chessboard = board;
    let King = [];
    let Queen = [];

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

    function findPiece(chessboard) {
        for (let i = 0; i < 5; i++) {
            for (let x = 0; x < 5; x++) {
                if (chessboard[i][x] === "q") {
                    Queen.push((i + 2) + "" + (x + 1));
                    activePosition[(i + 2) + "" + (x + 1)] = "Q";
                    whiteInfluence[(i + 2) + "" + (x + 1)] = "x";
                } else if (chessboard[i][x] === "k") {
                    King.push((i + 2) + "" + (x + 1));
                }
            }
        }
    }

    function QueenPositions(q) {
        for (let i = parseInt(q); i === blankBoard[i]; i += 10) {
            if ((i + 10) === activePosition[i + 10]) {
                whiteInfluence[i + 10] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i -= 10) {
            if ((i - 10) === activePosition[i - 10]) {
                whiteInfluence[i - 10] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i++) {
            if ((i + 1) === activePosition[i + 1]) {
                whiteInfluence[i + 1] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i--) {
            if ((i - 1) === activePosition[i - 1]) {
                whiteInfluence[i - 1] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i += 11) {
            if ((i + 11) === activePosition[i + 11]) {
                whiteInfluence[i + 11] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i -= 11) {
            if ((i - 11) === activePosition[i - 11]) {
                whiteInfluence[i - 11] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i += 9) {
            if ((i + 9) === activePosition[i + 9]) {
                whiteInfluence[i + 9] = "x";
            }
        }
        for (let i = parseInt(q); i === blankBoard[i]; i -= 9) {
            if ((i - 9) === activePosition[i - 9]) {
                whiteInfluence[i - 9] = "x";
            }
        }
    }

    function calculateInfluence() {
        for (let i = 0; i < Queen.length; i++) {
            QueenPositions(Queen[i]);
        }
    }

    function kingInCheck(influenceBoard) {
        if (influenceBoard[King[0]] === "x") {
            return true;
        } else {
            return false;
        }
    }

    findPiece(chessboard);
    calculateInfluence();
    return kingInCheck(whiteInfluence);
}

/*
Status: Solved
*/