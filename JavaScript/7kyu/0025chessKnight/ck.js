
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

let humanBoard = [
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100,"a8","b8","c8","d8","e8","f8","g8","h8", 100,
    100,"a7","b7","c7","d7","e7","f7","g7","h7", 100,
    100,"a6","b6","c6","d6","e6","f6","g6","h6", 100,
    100,"a5","b5","c5","d5","e5","f5","g5","h5", 100,
    100,"a4","b4","c4","d4","e4","f4","g4","h4", 100,
    100,"a3","b3","c3","d3","e3","f3","g3","h3", 100,
    100,"a2","b2","c2","d2","e2","f2","g2","h2", 100,
    100,"a1","b1","c1","d1","e1","f1","g1","h1", 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100, 100, 100, 100, 100, 100, 100
];

function chessKnight(str) {
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
    return Npositions.length;
}

/*
Status: Solved
*/