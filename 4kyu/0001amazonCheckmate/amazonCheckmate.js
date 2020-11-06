
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
    human: [
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
    ]
}

let white = {
    amazon: {
        location: 94,
        piece: "A",
        influence: [],
        position: function () {
            one: for (let i = white.amazon.location; i === chessboard.blank[i]; i += 10) {
                if ((i + 10) === chessboard.active[i + 10] || chessboard.active[i + 10] === black.king.piece) {
                    white.amazon.influence.push(i + 10);
                } else {
                    break one;
                }
            }
            two: for (let i = white.amazon.location; i === chessboard.blank[i]; i -= 10) {
                if ((i - 10) === chessboard.active[i - 10] || chessboard.active[i - 10] === black.king.piece) {
                    white.amazon.influence.push(i - 10);
                } else {
                    break two;
                }
            }
            three: for (let i = white.amazon.location; i === chessboard.blank[i]; i++) {
                if ((i + 1) === chessboard.active[i + 1] || chessboard.active[i + 1] === black.king.piece) {
                    white.amazon.influence.push(i + 1);
                } else {
                    break three;
                }
            }
            four: for (let i = white.amazon.location; i === chessboard.blank[i]; i--) {
                if ((i - 1) === chessboard.active[i - 1] || chessboard.active[i - 1] === black.king.piece) {
                    white.amazon.influence.push(i - 1);
                } else {
                    break four;
                }
            }
            five: for (let i = white.amazon.location; i === chessboard.blank[i]; i += 11) {
                if ((i + 11) === chessboard.active[i + 11] || chessboard.active[i + 11] === black.king.piece) {
                    white.amazon.influence.push(i + 11);
                } else {
                    break five;
                }
            }
            six: for (let i = white.amazon.location; i === chessboard.blank[i]; i -= 11) {
                if ((i - 11) === chessboard.active[i - 11] || chessboard.active[i - 11] === black.king.piece) {
                    white.amazon.influence.push(i - 11);
                } else {
                    break six;
                }
            }
            seven: for (let i = white.amazon.location; i === chessboard.blank[i]; i += 9) {
                if ((i + 9) === chessboard.active[i + 9] || chessboard.active[i + 9] === black.king.piece) {
                    white.amazon.influence.push(i + 9);
                } else {
                    break seven;
                }
            }
            eight: for (let i = white.amazon.location; i === chessboard.blank[i]; i -= 9) {
                if ((i - 9) === chessboard.active[i - 9] || chessboard.active[i - 9] === black.king.piece) {
                    white.amazon.influence.push(i - 9);
                } else {
                    break eight;
                }
            }
            let i = white.amazon.location;
            if ((i + 8) === chessboard.active[i + 8] || chessboard.active[i + 8] === black.king.piece) {
                white.amazon.influence.push(i + 8);
            }
            if ((i - 12) === chessboard.active[i - 12] || chessboard.active[i - 12] === black.king.piece) {
                white.amazon.influence.push(i - 12);
            }
            if ((i + 19) === chessboard.active[i + 19] || chessboard.active[i + 19] === black.king.piece) {
                white.amazon.influence.push(i + 19);
            }
            if ((i - 21) === chessboard.active[i - 21] || chessboard.active[i - 21] === black.king.piece) {
                white.amazon.influence.push(i - 21);
            }
            if ((i + 21) === chessboard.active[i + 21] || chessboard.active[i + 21] === black.king.piece) {
                white.amazon.influence.push(i + 21);
            }
            if ((i - 19) === chessboard.active[i - 19] || chessboard.active[i - 19] === black.king.piece) {
                white.amazon.influence.push(i - 19);
            }
            if ((i + 12) === chessboard.active[i + 12] || chessboard.active[i + 12] === black.king.piece) {
                white.amazon.influence.push(i + 12);
            }
            if ((i - 8) === chessboard.active[i - 8] || chessboard.active[i - 8] === black.king.piece) {
                white.amazon.influence.push(i - 8);
            }
        }
    },
    king: {
        location: 95,
        piece: "K",
        influence: [],
        position: function () {
            white.king.influence.push(white.king.location);
            if ((white.king.location + 10) === chessboard.blank[white.king.location + 10]) {
                white.king.influence.push(chessboard.blank[white.king.location + 10]);
            }
            if ((white.king.location - 10) === chessboard.blank[white.king.location - 10]) {
                white.king.influence.push(chessboard.blank[white.king.location - 10]);
            }
            if ((white.king.location + 1) === chessboard.blank[white.king.location + 1]) {
                white.king.influence.push(chessboard.blank[white.king.location + 1]);
            }
            if ((white.king.location - 1) === chessboard.blank[white.king.location - 1]) {
                white.king.influence.push(chessboard.blank[white.king.location - 1]);
            }
            if ((white.king.location + 11) === chessboard.blank[white.king.location + 11]) {
                white.king.influence.push(chessboard.blank[white.king.location + 11]);
            }
            if ((white.king.location - 11) === chessboard.blank[white.king.location - 11]) {
                white.king.influence.push(chessboard.blank[white.king.location - 11]);
            }
            if ((white.king.location + 9) === chessboard.blank[white.king.location + 9]) {
                white.king.influence.push(chessboard.blank[white.king.location + 9]);
            }
            if ((white.king.location - 9) === chessboard.blank[white.king.location - 9]) {
                white.king.influence.push(chessboard.blank[white.king.location - 9]);
            }
        },
    },
    position: [],
    influence: [],
    generateInfluence: function () {
        let allPieces = white.amazon.influence.concat(white.king.influence);
        white.influence = allPieces;
        for (let i = 0, len = allPieces.length; i < len; i++) {
            chessboard.whiteInfluence[allPieces[i]] = "x";
        }
    }
}

let black = {
    king: {
        location: 25,
        piece: "k",
        influence: [],
        position: function () {
            if ((black.king.location + 10) === chessboard.blank[black.king.location + 10]) {
                black.king.influence.push(chessboard.blank[black.king.location + 10]);
            }
            if ((black.king.location - 10) === chessboard.blank[black.king.location - 10]) {
                black.king.influence.push(chessboard.blank[black.king.location - 10]);
            }
            if ((black.king.location + 1) === chessboard.blank[black.king.location + 1]) {
                black.king.influence.push(chessboard.blank[black.king.location + 1]);
            }
            if ((black.king.location - 1) === chessboard.blank[black.king.location - 1]) {
                black.king.influence.push(chessboard.blank[black.king.location - 1]);
            }
            if ((black.king.location + 11) === chessboard.blank[black.king.location + 11]) {
                black.king.influence.push(chessboard.blank[black.king.location + 11]);
            }
            if ((black.king.location - 11) === chessboard.blank[black.king.location - 11]) {
                black.king.influence.push(chessboard.blank[black.king.location - 11]);
            }
            if ((black.king.location + 9) === chessboard.blank[black.king.location + 9]) {
                black.king.influence.push(chessboard.blank[black.king.location + 9]);
            }
            if ((black.king.location - 9) === chessboard.blank[black.king.location - 9]) {
                black.king.influence.push(chessboard.blank[black.king.location - 9]);
            }
        },
    }
}

let gameRules = {
    check: {
        calc: function () {
            if (white.influence.indexOf(black.king.location) >= 0) {
                gameRules.check.inCheck = true; 
            } else {
                gameRules.check.inCheck = false;
            }
        },
        inCheck: false,
        sum: 0
    },
    checkmate: {
        flightSquaresAttacked: 0,
        calc: function () {
            for (let i = 0, len = black.king.influence.length; i < len; i++) {
                if (white.influence.indexOf(black.king.influence[i]) >= 0) {
                    gameRules.checkmate.flightSquaresAttacked += 1;
                }
            }
            if (gameRules.check.inCheck === true && gameRules.checkmate.flightSquaresAttacked === black.king.influence.length) {
                gameRules.checkmate.isCheckmate = true;
                gameRules.checkmate.sum++;
            } else if (gameRules.check.inCheck === true) {
                gameRules.check.sum++;
            }
        },
        isCheckmate: false,
        sum: 0
    },
    stalemate: {
        calc: function () {
            if (gameRules.check.inCheck === false && gameRules.checkmate.flightSquaresAttacked === black.king.influence.length) {
                gameRules.stalemate.isStalemate = true;
                gameRules.stalemate.sum++;
            }
        },
        isStalemate: false,
        sum: 0
    },
    safe: {
        calc: function () {
            if (gameRules.check.inCheck === false && gameRules.stalemate.isStalemate === false) {
                gameRules.safe.sum++;
            }
        },
        sum: 0
    },
    occupied: function() {
        if (white.position.indexOf(black.king.location) >= 0) {
            if (chessboard.blank[black.king.location + 1] === 200) {
                black.king.location += 3;
                gameRules.occupied();
            } else {
                black.king.location++;
                gameRules.wasOccupied = true;
                gameRules.occupied();
            }
        }
    },
    wasOccupied: false,
    legal: function () {
        if (chessboard.blank[black.king.location] === 200 && black.king.location < 99) {
            black.king.location++;
            gameRules.occupied();
            gameRules.legal();
        }
    },
    kingZone: function () {
        if (white.king.influence.indexOf(black.king.location) >= 0) {
            if (gameRules.wasOccupied === false) {
                chessboard.active[black.king.location] = black.king.location;
                black.king.location++;
            } else {
                gameRules.wasOccupied = false;
            }
            gameRules.occupied();
            gameRules.legal();
            gameRules.kingZone();
        }
    }
}

let kata = {
    placePiece: function (piece, name) {
        let newPiece = chessboard.human.findIndex(square => square === piece);
        white[name].location = chessboard.blank[newPiece];
        white.position.push(white[name].location);
        chessboard.active[white[name].location] = white[name].piece;
    },
    kingEvaluation: function (king, amazon) {
        black.king.location = 20;
        do {
            kata.placePiece(amazon, "amazon");
            kata.placePiece(king, "king");
            white.amazon.position();
            white.king.position();
            if (black.king.location === 21) {
                black.king.location++;
                gameRules.occupied();
                gameRules.legal();
                gameRules.kingZone();
            }
            gameRules.occupied();
            gameRules.legal();
            gameRules.kingZone();
            if (black.king.location >= 99) {
                break;
            }
            white.generateInfluence();
            black.king.position();
            gameRules.check.calc();
            gameRules.checkmate.calc();
            gameRules.stalemate.calc();
            gameRules.safe.calc();
            black.king.location++;
            kata.reset();
        }
        while (black.king.location < 99);
    },
    reset: function () {
        chessboard.active = chessboard.blank.slice(0);
        chessboard.whiteInfluence = chessboard.blank.slice(0);
        white.amazon.influence = [];
        white.king.influence = [];
        black.king.influence = [];
        gameRules.check.inCheck = false;
        gameRules.checkmate.isCheckmate = false;
        gameRules.stalemate.isStalemate = false;
        gameRules.checkmate.flightSquaresAttacked = 0;
    },
    result: function() {
        let result = [];
        result.push(gameRules.checkmate.sum);
        result.push(gameRules.check.sum);
        result.push(gameRules.stalemate.sum);
        result.push(gameRules.safe.sum);
        return result;
    },
    resetkata: function () {
        kata.result.result = [];
        gameRules.checkmate.sum = 0;
        gameRules.check.sum = 0;
        gameRules.stalemate.sum = 0;
        gameRules.safe.sum = 0;
        chessboard.active = chessboard.blank.slice(0);
        chessboard.whiteInfluence = chessboard.blank.slice(0);
        white.amazon.influence = [];
        white.king.influence = [];
        black.king.influence = [];
        white.position = [];
    }
}

function amazonCheckmate(king, amazon) {
    kata.resetkata();
    kata.kingEvaluation(king, amazon);
    return kata.result();
}

/*
Status: Solved
*/