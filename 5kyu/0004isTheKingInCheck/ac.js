
let readline = require('readline');
const { stdout } = require('process');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', '♟', ' ', '♟', ' ', ' '],
         [' ', ' ', '♔', '♜', ' ', ' ', ' ', ' '],
         [' ', ' ', '♛', '♝', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

let chessboard = {
    blank: [
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
    ],
    active: [
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
    ],
    whiteInfluence: [
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
    ],
    blackInfluence: [
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
    ],
    plain: [
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
    ],
    human: [
        200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
        200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
        200, "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", 200,
        200, "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", 200,
        200, "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", 200,
        200, "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", 200,
        200, "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", 200,
        200, "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", 200,
        200, "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", 200,
        200, "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", 200,
        200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
        200,  200,  200,  200,  200,  200,  200,  200,  200, 200
    ],
    legal: [
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
        200, 200, 200, 200, 200, 200, 200, 200, 200, 2000
    ],
    /*
    populateBoardsFromStart: function() {
        chessboard.active = chessboard.blank;
        chessboard.whiteInfluence = chessboard.blank;
        chessboard.blackInfluence = chessboard.blank;
        chessboard.plain = chessboard.blank;
    },
    */
}

let colorArray = ["white", "black"];
let pieceArray = ["pawn", "knight", "bishop", "rook", "queen", "king"];
let piece = {
    white: {
        totalValue: 0,
        squaresOccupied: [],
        influence: [],
        allSquaresInfluenced: [],
        king: {
            value: 99,
            icon: '♚',
            homeLocation: [95],
            piece: 'K',
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -10, -9, -1, 1, 9, 10, 11];
                for (let x = 0; x < 8 ; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.active[instanceOfLocation + lineOfAttack[x]] || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X' || chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X') {
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x') {
                            piece.white.king.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else {
                            piece.white.king.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        }
                    }
                }
            },
            createLegalMoves: function () {
                for (let influenceIndex = 0, influenceLength = piece.white.king.influence.length; influenceIndex < influenceLength; influenceIndex++) {
                    for (let allSqauresInfluencedIndex = 0, allSqauresInfluencedLength = piece.white.allSquaresInfluenced.length; allSqauresInfluencedIndex < allSqauresInfluencedLength; allSqauresInfluencedIndex++) {
                        if (piece.white.king.influence[influenceIndex] != piece.white.allSquaresInfluenced[allSqauresInfluencedIndex]) {
                            piece.white.king.legalMoves.push(piece.white.king.influence[influenceIndex]);
                        }
                    }
                }
            }
        },
        queen: {
            value: 9,
            icon: '♛',
            piece: 'Q',
            homeLocation: [94], // 94
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -10, -9, -1, 1, 9, 10, 11];
                let pieceInfluence = false;
                for (let x = 0; x < 8; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; (i === chessboard.blank[i]) && (pieceInfluence === false); i += lineOfAttack[x]) {
                        if ((i + lineOfAttack[x] === chessboard.blank[i + lineOfAttack[x]]) || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'X') {
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[i + lineOfAttack[x]] === 'x') {
                                piece.white.queen.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.queen.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.white.queen.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.queen.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                        }
                    }
                }
            },
        },
        rook: {
            value: 5,
            icon: '♜',
            piece: 'R',
            homeLocation: [91, 98],
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-10, -1, 1, 10];
                let pieceInfluence = false;
                for (let x = 0; x < 8; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; i === chessboard.blank[i] && pieceInfluence === false; i += lineOfAttack[x]) {
                        if (((i + lineOfAttack[x]) === chessboard.blank[i + lineOfAttack[x]]) || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'X') {
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[i + lineOfAttack[x]] === 'x') {
                                piece.white.rook.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.rook.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.white.rook.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.rook.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                            
                        }
                    }
                }
            }
        },
        bishop: {
            value: 3,
            icon: '♝',
            piece: 'B',
            homeLocation: [93, 96],
            influence: [],
            location: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -9, 9, 11];
                let pieceInfluence = false;
                for (let x = 0; x < 4; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; (i === chessboard.blank[i]) && (pieceInfluence === false); i += lineOfAttack[x]) {
                        if ((i + lineOfAttack[x]) === chessboard.blank[i + lineOfAttack[x]] || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'X') {
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x') {
                                piece.white.bishop.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.bishop.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]); // change to ([chessboard.blank[i + lineOfAttack[x]], instanceOfLocation])
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.white.bishop.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.bishop.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.white.allSquaresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                        }
                    }
                }
            },
        },
        knight: {
            value: 3,
            icon: '♞',
            piece: 'N',
            homeLocation: [97, 92],
            influence: [],
            location: [],
            legalMoves: [],
            position: function(instanceOfLocation) {
                let lineOfAttack = [-21, -19, -12, -8, 8, 12, 19, 21];
                for (let x = 0; x < 8 ; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.active[instanceOfLocation + lineOfAttack[x]] || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X' || chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X') {
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x') {
                            piece.white.knight.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.knight.legalMoves.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else {
                            piece.white.knight.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.knight.legalMoves.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        }
                    }
                }
            },
        },
        pawn: {
            value: 1,
            icon: '♟',
            piece: 'P',
            homeLocation: [81, 82, 83, 84, 85, 86, 87, 88],
            location: [],
            influence: [],
            legalMoves: [],
            position: function(instanceOfLocation) {
                let lineOfAttack = [-11, -9];
                for (let x = 0; x < 2; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.active[instanceOfLocation + lineOfAttack[x]] || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X' || chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        piece.white.pawn.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        piece.white.allSquaresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                    }
                }
            },
            generatePawnMove: function() {
                for (let i = 0, len = piece.white.pawn.location.length; i < len; i++) {
                    if (piece.white.pawn.location[i] > 80 && piece.white.pawn.location[i] < 90) {
                        let oneStep = true;
                        let twoStep = true;
                        for (let x = 0, blackPieceLocations = piece.black.squaresOccupied.length; x < blackPieceLocations; x++) {
                            if (piece.white.pawn.location[i] - 10 === piece.black.squaresOccupied[x]) {
                                oneStep = false;
                            }
                            if (piece.white.pawn.location[i] - 20 === piece.black.squaresOccupied[x]) {
                                    twoStep = false;
                            }
                        }
                        if (oneStep === true) {
                            piece.white.pawn.legalMoves.push(piece.white.pawn.location[i] - 10);
                        }
                        if (twoStep === true && oneStep === true) {
                            piece.white.pawn.legalMoves.push(piece.white.pawn.location[i] - 20);
                        }
                    }
                }
            }
        },
    },
    black: {
        totalValue: 0,
        squaresOccupied: [],
        influence: [],
        allSqauresInfluenced: [],
        king: {
            value: 99,
            icon: '♔',
            piece: 'k',
            homeLocation: [25],
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -10, -9, -1, 1, 9, 10, 11];
                for (let x = 0; x < 8 ; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.active[instanceOfLocation + lineOfAttack[x]] || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X' || chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x') {
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X') {
                            piece.black.king.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else {
                            piece.black.king.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        }
                    }
                }
            },
            createLegalMoves: function () {
                for (let influenceIndex = 0, influenceLength = piece.black.king.influence.length; influenceIndex < influenceLength; influenceIndex++) {
                    for (let allSquaresInfluencedIndex = 0, allSquaresInfluencedLength = piece.black.allSqauresInfluenced.length; allSquaresInfluencedIndex < allSquaresInfluencedLength; allSquaresInfluencedIndex++) {
                        if (piece.black.king.influence[influenceIndex] !== piece.black.allSqauresInfluenced[allSquaresInfluencedIndex]) {
                            piece.black.king.legalMoves.push(piece.black.king.influence[influenceIndex]);
                        }
                    }
                }
            }
        },
        queen: {
            value: 9,
            icon: '♕',
            piece: 'q',
            homeLocation: [24], // 24
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -10, -9, -1, 1, 9, 10, 11];
                let pieceInfluence = false;
                for (let x = 0; x < 8; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; (i === chessboard.blank[i]) && (pieceInfluence === false); i += lineOfAttack[x]) {
                        if ((i + lineOfAttack[x] === chessboard.blank[i + lineOfAttack[x]]) || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'x') {
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[i + lineOfAttack[x]] === 'X') {
                                piece.black.queen.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.queen.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.black.queen.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.queen.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                        }
                    }
                }
            },
        },
        rook: {
            value: 5,
            icon: '♖',
            piece: 'r',
            homeLocation: [21, 28],
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-10, -1, 1, 10];
                let pieceInfluence = false;
                for (let x = 0; x < 8; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; i === chessboard.blank[i] && pieceInfluence === false; i += lineOfAttack[x]) {
                        if (((i + lineOfAttack[x]) === chessboard.blank[i + lineOfAttack[x]]) || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'x') {
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[i + lineOfAttack[x]] === 'X') {
                                piece.black.rook.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.rook.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.black.rook.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.rook.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                            
                        }
                    }
                }
            }
        },
        bishop: {
            value: 3,
            icon: '♗',
            piece: 'b',
            homeLocation: [26, 23],
            location: [],
            influence: [],
            legalMoves: [],
            position: function (instanceOfLocation) {
                let lineOfAttack = [-11, -9, 9, 11];
                let pieceInfluence = false;
                for (let x = 0; x < 4; x++, pieceInfluence = false) {
                    for (let i = instanceOfLocation; (i === chessboard.blank[i]) && (pieceInfluence == false); i += lineOfAttack[x]) {
                        if ((i + lineOfAttack[x]) === chessboard.blank[i + lineOfAttack[x]] || (chessboard.plain[i + lineOfAttack[x]] === 'X' || chessboard.plain[i + lineOfAttack[x]] === 'x')) {
                            if (chessboard.plain[i + lineOfAttack[x]] === 'x') {
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X') {
                                piece.black.bishop.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.bishop.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                                pieceInfluence = true;
                            } else {
                                piece.black.bishop.influence.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.bishop.legalMoves.push(chessboard.blank[i + lineOfAttack[x]]);
                                piece.black.allSqauresInfluenced.push(chessboard.blank[i + lineOfAttack[x]]);
                            }
                        }
                    }
                }
            },
        },
        knight: {
            value: 3,
            icon: '♘',
            piece: 'n',
            homeLocation: [22, 27],
            location: [],
            influence: [],
            legalMoves: [],
            position: function(instanceOfLocation) {
                let lineOfAttack = [-21, -19, -12, -8, 8, 12, 19, 21];
                for (let x = 0; x < 8 ; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.active[instanceOfLocation + lineOfAttack[x]] || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X' || chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x') {
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else if (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X') {
                            piece.black.knight.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.knight.legalMoves.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        } else {
                            piece.black.knight.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.knight.legalMoves.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                            piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        }
                    }
                }
            },
        },
        pawn: {
            value: 1,
            icon: '♙',
            piece: 'p',
            homeLocation: [31, 32, 33, 34, 35, 36, 37, 38],
            location: [],
            influence: [],
            legalMoves: [],
            position: function(instanceOfLocation) {
                let lineOfAttack = [9, 11];
                for (let x = 0; x < 2; x++) {
                    if (instanceOfLocation + lineOfAttack[x] === chessboard.plain[instanceOfLocation + lineOfAttack[x]]  || (chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'X'|| chessboard.plain[instanceOfLocation + lineOfAttack[x]] === 'x')) {
                        piece.black.pawn.influence.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                        piece.black.allSqauresInfluenced.push(chessboard.blank[instanceOfLocation + lineOfAttack[x]]);
                    }
                }
            },
            generatePawnMove: function() {
                for (let i = 0, len = piece.black.pawn.location.length; i < len; i++) {
                    if (piece.black.pawn.location[i] > 30 && piece.black.pawn.location[i] < 40) {
                        let oneStep = true;
                        let twoStep = true;
                        for (let x = 0, whitePieceLocations = piece.white.squaresOccupied.length; x < whitePieceLocations; x++) {
                            if (piece.black.pawn.location[i] + 10 === piece.white.squaresOccupied[x]) {
                                oneStep = false;
                            }
                            if (piece.black.pawn.location[i] + 20 === piece.white.squaresOccupied[x]) {
                                    twoStep = false;
                            }
                        }
                        if (oneStep === true) {
                            piece.black.pawn.legalMoves.push(piece.black.pawn.location[i] + 10);
                        }
                        if (twoStep === true && oneStep === true) {
                            piece.black.pawn.legalMoves.push(piece.black.pawn.location[i] + 20);
                        }
                    }
                }
            }
        },
    }
}

enPassant = {

}

castle = {
    kingsideValue: 8,
    queensideValue: 7,
    white: {
        castleInvalid: false,
        hasCastled: false,
        queenside: false,
        kingside: false,
        variables: [true, true, true, false, false],  //King Moved, Queen Rook Moved, King Rook Moved, Squares Crossed Under Attack, King in Check
    },
    black: {
        castleInvalid: false,
        hasCastled: false,
        queenside: false,
        kingside: false,
        variables: [true, true, true, false, false],  //King Moved, Queen Rook Moved, King Rook Moved, Squares Crossed Under Attack, King in Check
    },
    whiteStatus: function () {
        if (castle.white.castleInvalid === false) {
            if (castle.white.hasCastled === false) {
                //Invalidates future castling if King has moved
                if (castle.white.variables[0] === true && white.king.location[0] !== 95) {
                    castle.white.variables[0] = false;
                    castle.white.castleInvalid = true;
                }
                //Invalidate if Queen Rook has moved
                if (castle.white.variables[1] === true && white.rook.location[0] !== 91) {
                    castle.white.variables[1] = false;
                }
                //Invalidate if King Rook has moved
                if (castle.white.variables[2] === true && white.rook.location[1] !== 98) {
                    castle.white.variables[2] = false;
                }
                //Invalidates future Castling if both Rooks have moved
                if (castle.white.variables[1] === false && castle.white.variables[2] === false) {
                    castle.white.castleInvalid = true;
                }
                //Invalidates Castling if WHITE King in Check. 
                if (piece.white.king.location) // ***************Fix 
                {

                }
            }
        }
        // **************************
        //        TODO: FINISH
        // **************************
    },
    blackStatus: function() {

    },
    available: function(color) {

    },
    reset: function() {
        castle.white.queenside = false;
        castle.white.kingside = false;
        castle.black.queenside = false;
        castle.black.queenside = false;
    }
},

globalEngineVariables = {
    inCheck: false,
    whiteCastle: [false, false],  //Queenside Kingside
    blackCastle: [false, false],  //Queenside Kingside
    moveCounter: 0,
    lastPawnMove: 0,
    enPassant: false,
}


/*
        ****************
        *              *
        *  Kata Tools  * *****************************************************
        *              *
        ****************
*/

kataTools = {
    rotatedInput: undefined,
    location: 0,
    rotateBoard: function (input) {
        kataTools.rotatedInput = input.reverse();
        for (let row = 0; row < 8; row++) {
            kataTools.rotatedInput[row] = kataTools.rotatedInput[row].reverse();
        }
    },
    populatePieceLocationsFrom: function (rotatedInput) {
        let answerArray = [];
        for (let row = 0; row < 8; row++) {
            for (let column = 0; column < 8; column++) {
                if (rotatedInput[row][column] !== ' ') {
                    answerArray.push(row + 2 + "");
                    answerArray.push(column + 1 + "");
                    if (answerArray.length === 2) {
                        for (let color = 0, colorLen = colorArray.length; color < colorLen; color++) {
                            for (let type = 0, piecesLen = pieceArray.length; type < piecesLen; type++) {
                                if (piece[colorArray[color]][pieceArray[type]].icon === rotatedInput[row][column]) {
                                    let temp = Number(answerArray.join(""));
                                    piece[colorArray[color]][pieceArray[type]].location.push(temp);
                                }
                            }
                        }
                        answerArray = [];
                    }
                }
            }
        }
    },
    checkKataInput: function (color, type) {
        for (let x = 0; x < piece[color][type].influence.length; x++) {
            console.log(chessboard.human[piece[color][type].influence[x]]);
        }
    }
}

/*
        ###############################################################################
        ##                                                                           ## 
        ##                          Debug Tools                                      ## 
        ##                                                                           ## 
        ############################################################################### 
*/

let debugTools = {
    testPiece: {
        color: "white",
        type: "rook",
        testFromMiddle: function (color, type, square) {
            piece[color][type].location.push(square);
            piece[color][type].position(piece[color][type].location[0]);
            console.log(piece[color][type].influence);
            for (let i = 0, len = piece[color][type].influence.length; i < len; i++) {
                console.log(chessboard.human[piece[color][type].influence[i]]);
            }
        }
    },
    colors: ["white", "black"],
    pieces: ["king", "queen", "rook", "bishop", "knight", "pawn"],
    outputBoard: chessboard.blank,
    startNormalGameBoard: function (colors, pieces) {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    debugTools.outputBoard[piece[colors[a]][pieces[b]].location[z]] = piece[colors[a]][pieces[b]].icon;
                    z++;
                } while (z < piece[colors[a]][pieces[b]].location.length)
            }
        }
    },
    printBoard: function (array) {
        let result = "";
        let m = 0;
        let blackWhite = true;
        for (let i = 21; i < 101; i += 10) {
            for (let x = i; x < i + 8; x++) {
                if (array[x]/1 && blackWhite === false) {
                    result += "\u25A1";
                    blackWhite = true;
                } else if (array[x]/1 && blackWhite === true) {
                    result += "\u25A0";
                    blackWhite = false;
                } else if (blackWhite === true) {
                    result += array[x];
                    blackWhite = false;
                } else {
                    result += array[x];
                    blackWhite = true;
                }
                m++;
                if (m % 8 === 0) {
                    if (blackWhite === true) {
                        blackWhite = false;
                    } else {
                        blackWhite = true;
                    }
                }
            }
            result += "\n";
        }
        console.log(result); 
    }
}

/*
debugTools.startNormalGameBoard(debugTools.colors, debugTools.pieces);
debugTools.printBoard(debugTools.outputBoard);
*/

function testIndividualPiece(color, type, square) {
    debugTools.testPiece.color = color;
    debugTools.testPiece.type = type;
    debugTools.testPiece.testFromMiddle(debugTools.testPiece.color, debugTools.testPiece.type, square);
}

//testIndividualPiece("white", "queen", 91);

/*

Detect pieces and stop writing influence
White pieces attack to and include the black pieces but not the sides.
Black pieces attack to and include the white pieces but not the sides.
Each side defends it's own pieces.
## There is a piece board not defined by color or type
    If an piece loop intersects a piece, it includes that piece as influence but
    no further. 
    If a piece is under the opposite side influence, is ANY of the pieces placing
        influence a Queen, Rook or Bishop?
    If the above statement is true, does moving place it's own color king in check?

    A loop has to go through each piece and place it on the Active board, and the
        Plain board. 
    A loop has to go through each piece and using the Plain board, create an
        influence list for that piece. 
   ?Objects need to create individual pieces after creating the starting position?
        Two knights are under attack, if one moves does it place the king in check?
        Is the knight under attack?
        Yes
        Is the attacking piece a Queen, Rook, or Bishop?
        Yes
        So we know which knight it is or what square it's on. 
        We can then remove it and check to see if the king is now in check. 
            So do we need a simple algorithm that just computes moves and checks for
                king checks?
        if false, check remaining pieces that attack the square. 



Queen, Rook and Bishop pin other pieces.
When pieces move, are they attacked by a pinning piece and if they move is the king
    attacked?

en-passant

castling
Has the king or rook moved?
Is there no other pieces between them?
Is the king in check?
Does the king cross over or land on a square that would place it in check?



*/


/*
        ##################################################### 
        #####################################################
        ##################################################### 
        ###                                               ### 
        ###                  Engine                       ### 
        ###                                               ### 
        #####################################################
        ##################################################### 
        ##################################################### 
*/

let engine = {
    createActiveChessboardFromStart: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    chessboard.active[piece[colorArray[a]][pieceArray[b]].homeLocation[z]] = piece[colorArray[a]][pieceArray[b]].piece;
                    z++;
                } while (z < piece[colorArray[a]][pieceArray[b]].homeLocation.length)
            }
        }
    },
    createActiveChessboardWhileInProgress: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    chessboard.active[piece[colorArray[a]][pieceArray[b]].location[z]] = piece[colorArray[a]][pieceArray[b]].piece;
                    z++;
                } while (z < piece[colorArray[a]][pieceArray[b]].location.length)
            }
        }
    },
    createWhiteAndBlackInfluenceBoards: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    chessboard.whiteInfluence[piece.white[pieceArray[b]].influence[z]] = 'x';
                    z++;
                } while (z < piece.white[pieceArray[b]].influence.length)
            }
        }
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    chessboard.blackInfluence[piece.black[pieceArray[b]].influence[z]] = 'x';
                    z++;
                } while (z < piece.black[pieceArray[b]].influence.length)
            }
        }
    },
    createLegalMoveBoard: function (color) { 
        for (let pieceIndex = 0, totalNumberOfPieces = pieceArray.length; pieceIndex < totalNumberOfPieces; pieceIndex++) {
            let z = 0;
            do {
                chessboard.legal[piece[color][pieceArray[pieceIndex]].legalMoves[z]] = 'x';
                z++;
            } while (z < piece[color][pieceArray[pieceIndex]].legalMoves.length)
        }
    },
    createPlainChessboard: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                let z = 0;
                do {
                    if (a === 0) {
                        chessboard.plain[piece[colorArray[a]][pieceArray[b]].location[z]] = 'X';
                    } else {
                        chessboard.plain[piece[colorArray[a]][pieceArray[b]].location[z]] = 'x';
                    }
                    z++;
                } while (z < piece[colorArray[a]][pieceArray[b]].location.length)
            }
        }
    },
    clearPieceLocations: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                piece[colorArray[a]][pieceArray[b]].location = [];
            }
        }
    },
    onStartPopulatePieceLocations: function() {
        /*
        Play with only one or a few pieces.
        piece.white.queen.location = piece.white.queen.homeLocation;
        */
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                piece[colorArray[a]][pieceArray[b]].location = piece[colorArray[a]][pieceArray[b]].homeLocation;
            }
        }
        
    },
    fillEachColorsSquaresOccupiedArray: function() {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                for (let c = 0, len = piece[colorArray[a]][pieceArray[b]].location.length; c < len; c++) {
                    piece[colorArray[a]].squaresOccupied.push(piece[colorArray[a]][pieceArray[b]].location[c]);
                }
            }
        }
    },
    calculateEachColorTotalValue: function() {
        piece.white.totalValue = 0;
        piece.black.totalValue = 0;
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                piece[colorArray[a]].totalValue += piece[colorArray[a]][pieceArray[b]].location.length * piece[colorArray[a]][pieceArray[b]].value;
            }
        }
    },
    createColorInfluence: function () {
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                for (let c = 0, len = piece[colorArray[a]][pieceArray[b]].location.length; c < len; c++) {
                    piece[colorArray[a]][pieceArray[b]].position(piece[colorArray[a]][pieceArray[b]].location[c]);
                }
            }
        }
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 6; b++) {
                for (let i = 0, len = piece[colorArray[a]][pieceArray[b]].influence.length; i < len; i++) {
                    piece[colorArray[a]].influence.push(piece[colorArray[a]][pieceArray[b]].influence[i]);
                }
            }
        }
    },
    createRandomMove: function() {
        
        let randomPiece = Math.floor(Math.random() * 2);
    }
}

/*
            ********************************************
            ********************************************
            ******                                ******
            ******  *****   *****  ************   ******
            ******  *****   *****      *****      ******
            ******  *****   *****      *****      ******
            ******  *****   *****      *****      ******
            ******  *****   *****      *****      ******
            ******  *****   *****      *****      ******
            ******   ***********   ************   ******
            ******                                ******
            ********************************************
            ******************************************** 
*/


let ui = {
    welcome: function() {
        console.log("Welcome to Affliction Chess");
        console.log("Engine and User Interface Created by");
        console.log("Andrew M. Pierce");
    },
    chooseColor: function() {

    },
    playGame: function() {

    },
    gameResult: function() {

    },
    quitGame: function() {

    },
    credits: function() {

    },
    ingame: function() {

    }
}

function playNewGame() {
    //chessboard.populateBoardsFromStart();  // Deactivated due to inconsistent results
    engine.onStartPopulatePieceLocations();
    engine.fillEachColorsSquaresOccupiedArray();
    engine.createPlainChessboard();
    engine.createActiveChessboardWhileInProgress();
    engine.createColorInfluence();
    engine.createWhiteAndBlackInfluenceBoards();
    piece.black.pawn.generatePawnMove();
    piece.white.pawn.generatePawnMove();
    //console.log(piece.white.pawn.legalMoves);
    engine.createLegalMoveBoard('white');
    ui.welcome();
    //debugTools.printBoard(chessboard.whiteInfluence);
    //debugTools.printBoard(chessboard.blackInfluence);
    //debugTools.printBoard(chessboard.legal);
    let inCheck = false;
    for (let i = 0, len = piece.white.influence.length; i < len; i++) {
        if (piece.black.king.location[0] === piece.white.influence[i]) {
            inCheck = true;
        }
    }
    //console.log("In Check? " + inCheck);
    // reset castling;
    debugTools.startNormalGameBoard(debugTools.colors, debugTools.pieces);
    debugTools.printBoard(debugTools.outputBoard);
    
    let exit = 0;
    while (exit !== 1) {
        rl.question("Please enter a move.", function(answer) {
            if (answer === "q") {
                exit++;
                rl.close();
            } else {
                console.log("Thank you for the move.");
            }
        });
    }
}
rl.question(playNewGame(), function (answer) {
    console.log("Thank you for playing!");
    rl.close();
})
//playNewGame();

// console.log(piece.white.queen.legalMoves);


//engine.createActiveChessboardFromStart();
//engine.createPlainChessboard();
//debugTools.printBoard(chessboard.plain);
//engine.calculateEachColorTotalValue();
// TODO: Fix engine.createPlainChessboard()




/*
// Kata Solution:

kataTools.rotateBoard(input);
kataTools.populatePieceLocationsFrom(kataTools.rotatedInput);
engine.createPlainChessboard();
engine.createActiveChessboardWhileInProgress();
engine.createColorInfluence();
console.log(piece.black.influence);
engine.createWhiteAndBlackInfluenceBoards();
debugTools.printBoard(chessboard.whiteInfluence);
debugTools.printBoard(chessboard.blackInfluence);
let inCheck = false;
for (let i = 0, len = piece.white.influence.length; i < len; i++) {
    if (piece.black.king.location[0] === piece.white.influence[i]) {
        inCheck = true;
    }
}
console.log(inCheck);
*/


// TODO:  Add King Legal Move function to engine

