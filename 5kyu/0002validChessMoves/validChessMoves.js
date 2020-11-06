
function count(board) {

    let chessboard = board;
    let Knight = [];
    let y = 0;
    let result = 0;

    let blankBoard = [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100,  21,  22,  23,  24,  25,  26,  27,  28, 100,
        100,  31,  32,  33,  34,  35,  36,  37,  38, 100,
        100,  41,  42,  43,  44,  45,  46,  47,  48, 100,
        100,  51,  52,  53,  54,  55,  56,  57,  58, 100,
        100,  61,  62,  63,  64,  65,  66,  67,  68, 100,
        100,  71,  72,  73,  74,  75,  76,  77,  78, 100,
        100,  81,  82,  83,  84,  85,  86,  87,  88, 100,
        100,  91,  92,  93,  94,  95,  96,  97,  98, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100
    ];

    let activePosition = [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100,  21,  22,  23,  24,  25,  26,  27,  28, 100,
        100,  31,  32,  33,  34,  35,  36,  37,  38, 100,
        100,  41,  42,  43,  44,  45,  46,  47,  48, 100,
        100,  51,  52,  53,  54,  55,  56,  57,  58, 100,
        100,  61,  62,  63,  64,  65,  66,  67,  68, 100,
        100,  71,  72,  73,  74,  75,  76,  77,  78, 100,
        100,  81,  82,  83,  84,  85,  86,  87,  88, 100,
        100,  91,  92,  93,  94,  95,  96,  97,  98, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100
    ];

    let whiteInfluence = [
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100,  21,  22,  23,  24,  25,  26,  27,  28, 100,
        100,  31,  32,  33,  34,  35,  36,  37,  38, 100,
        100,  41,  42,  43,  44,  45,  46,  47,  48, 100,
        100,  51,  52,  53,  54,  55,  56,  57,  58, 100,
        100,  61,  62,  63,  64,  65,  66,  67,  68, 100,
        100,  71,  72,  73,  74,  75,  76,  77,  78, 100,
        100,  81,  82,  83,  84,  85,  86,  87,  88, 100,
        100,  91,  92,  93,  94,  95,  96,  97,  98, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
        100, 100, 100, 100, 100, 100, 100, 100, 100, 100
    ];

    function findPiece(chessboard) {
        for (let i = 0; i < 8; i++) {
            for (let x = 0; x < 8; x++) {
                if (chessboard[i][x] === "K") {
                    y = ((i + 2) + "" + (x + 1));
                    y = parseInt(y);
                    Knight.push(y);
                }
            }
        }
    }

    function KnightPositions(i) {
        if ((i + 8) === blankBoard[i + 8]) {
            activePosition[i + 8] = "x";
        }
        if ((i - 12) === blankBoard[i - 12]) {
            activePosition[i - 12] = "x";
        }
        if ((i + 19) === blankBoard[i + 19]) {
            activePosition[i + 19] = "x";
        }
        if ((i - 21) === blankBoard[i - 21]) {
            activePosition[i - 21] = "x";
        }
        if ((i + 21) === blankBoard[i + 21]) {
            activePosition[i + 21] = "x";
        }
        if ((i - 19) === blankBoard[i - 19]) {
            activePosition[i - 19] = "x";
        }
        if ((i + 12) === blankBoard[i + 12]) {
            activePosition[i + 12] = "x";
        }
        if ((i - 8) === blankBoard[i - 8]) {
            activePosition[i - 8] = "x";
        }
    }

    function findNextKnight(influenceBoard) {
        for (let i = 21; i < 99; i++) {
            if (influenceBoard[i] === "x") {
                KnightPositionsNextMove(blankBoard[i]);
            }
        }
    }

    function KnightPositionsNextMove(i) {
        if ((i + 8) === blankBoard[i + 8]) {
            whiteInfluence[i + 8] = "x";
        }
        if ((i - 12) === blankBoard[i - 12]) {
            whiteInfluence[i - 12] = "x";
        }
        if ((i + 19) === blankBoard[i + 19]) {
            whiteInfluence[i + 19] = "x";
        }
        if ((i - 21) === blankBoard[i - 21]) {
            whiteInfluence[i - 21] = "x";
        }
        if ((i + 21) === blankBoard[i + 21]) {
            whiteInfluence[i + 21] = "x";
        }
        if ((i - 19) === blankBoard[i - 19]) {
            whiteInfluence[i - 19] = "x";
        }
        if ((i + 12) === blankBoard[i + 12]) {
            whiteInfluence[i + 12] = "x";
        }
        if ((i - 8) === blankBoard[i - 8]) {
            whiteInfluence[i - 8] = "x";
        }
    }

    function countAttacked(influenceBoard) {
        for (let i = 21; i < 99; i++) {
            if (influenceBoard[i] === "x") {
                result += 1;
            }
        }
    }

    findPiece(chessboard);
    KnightPositions(Knight[0]);
    findNextKnight(activePosition);
    countAttacked(whiteInfluence);
    return result;
}

/*
Status: Solved
*/