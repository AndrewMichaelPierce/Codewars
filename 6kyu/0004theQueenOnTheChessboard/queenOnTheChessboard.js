
function availableMoves(position) {

    let q = position;
    
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
        200,"A8","B8","C8","D8","E8","F8","G8","H8", 200,
        200,"A7","B7","C7","D7","E7","F7","G7","H7", 200,
        200,"A6","B6","C6","D6","E6","F6","G6","H6", 200,
        200,"A5","B5","C5","D5","E5","F5","G5","H5", 200,
        200,"A4","B4","C4","D4","E4","F4","G4","H4", 200,
        200,"A3","B3","C3","D3","E3","F3","G3","H3", 200,
        200,"A2","B2","C2","D2","E2","F2","G2","H2", 200,
        200,"A1","B1","C1","D1","E1","F1","G1","H1", 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
        200, 200, 200, 200, 200, 200, 200, 200, 200, 200
    ];

    let Qpositions = [];

    function QueenPositions(q) {
        
        for (let i = q; i === blankBoard[i]; i += 10) {
            if ((i + 10) === blankBoard[i + 10]) {
            Qpositions.push(humanBoard[i + 10]);
            }
        }
        for (let i = q; i === blankBoard[i]; i -= 10) {
            if ((i - 10) === blankBoard[i - 10]) {
            Qpositions.push(humanBoard[i - 10]);
            }
        }
        for (let i = q; i === blankBoard[i]; i++) {
            if ((i + 1) === blankBoard[i + 1]) {
            Qpositions.push(humanBoard[i + 1]);
            }
        }
        for (let i = q; i === blankBoard[i]; i--) {
            if ((i - 1) === blankBoard[i - 1]) {
            Qpositions.push(humanBoard[i - 1]);
            }
        }
        for (let i = q; i === blankBoard[i]; i += 11) {
            if ((i + 11) === blankBoard[i + 11]) {
            Qpositions.push(humanBoard[i + 11]);
            }
        }
        for (let i = q; i === blankBoard[i]; i -= 11) {
            if ((i - 11) === blankBoard[i - 11]) {
            Qpositions.push(humanBoard[i - 11]);
            }
        }
        for (let i = q; i === blankBoard[i]; i += 9) {
            if ((i + 9) === blankBoard[i + 9]) {
            Qpositions.push(humanBoard[i + 9]);
            }
        }
        for (let i = q; i === blankBoard[i]; i -= 9) {
            if ((i - 9) === blankBoard[i - 9]) {
            Qpositions.push(humanBoard[i - 9]);
            }
        }
    }

    for (let i = 0; i < humanBoard.length; i++) {
        if (q === humanBoard[i]) {
            q = blankBoard[i];
        }
    }

    QueenPositions(q);

    if (Qpositions.length === 0) {
        return Qpositions;
    }

    return Qpositions.sort();
}

/*
Status: Solved
*/