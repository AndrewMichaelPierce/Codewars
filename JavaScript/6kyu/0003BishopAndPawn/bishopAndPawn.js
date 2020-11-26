
function bishopAndPawn(bishop, pawn) {

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

    let Bpositions = [];

    function BishopPositions(bishop) {

        for (let i = bishop; i === blankBoard[i]; i += 11) {
            if ((i + 11) === blankBoard[i + 11]) {
                Bpositions.push(humanBoard[i + 11]);
            }
        }
        for (let i = bishop; i === blankBoard[i]; i -= 11) {
            if ((i - 11) === blankBoard[i - 11]) {
                Bpositions.push(humanBoard[i - 11]);
            }
        }
        for (let i = bishop; i === blankBoard[i]; i += 9) {
            if ((i + 9) === blankBoard[i + 9]) {
                Bpositions.push(humanBoard[i + 9]);
            }
        }
        for (let i = bishop; i === blankBoard[i]; i -= 9) {
            if ((i - 9) === blankBoard[i - 9]) {
                Bpositions.push(humanBoard[i - 9]);
            }
        }
    }

    for (let i = 0; i < humanBoard.length; i++) {
        if (bishop === humanBoard[i]) {
            bishop = blankBoard[i];
        }
    }

    BishopPositions(bishop);

    for (let i = 0; i < Bpositions.length; i++) {
        if (pawn === Bpositions[i]) {
            return true;
        }
    }
    return false;
}
bishopAndPawn("a1","c3");
