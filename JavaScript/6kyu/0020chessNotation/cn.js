
function chessNotation(notation) {

    //"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"

    let chessboard = {
        notationOutput: [
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  " ",  " ",  " ",  " ",  " ",  " ",  " ",  " ", 200,
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200
        ],
    }

    let colorArray = ["white", "black"];
    let pieceArray = ["pawn", "knight", "bishop", "rook", "queen", "king"];

    let piece = {
        white: {
            totalValue: 0,
            squaresOccupied: [],
            influence: [],
            allSqauresInfluenced: [],
            king: {
                value: 99,
                icon: '♚',
                homeLocation: [95],
                piece: 'K',
                location: [],
                influence: [],
                legalMoves: [],
                position: function (instanceOfLocation) {
                },
                createLegalMoves: function () {
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
                position: function (instanceOfLocation) {
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
                position: function (instanceOfLocation) {
                },
                generatePawnMove: function () {
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
                },
                createLegalMoves: function () {
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
                position: function (instanceOfLocation) {
                }
            },
            pawn: {
                value: 1,
                icon: '♙',
                piece: 'p',
                homeLocation: [31, 32, 33, 34, 35, 36, 37, 38],
                location: [],
                influence: [],
                legalMoves: [],
                position: function (instanceOfLocation) {
                },
                generatePawnMove: function () {
                }
            },
        }
    }

    let chessNotationReport = {
        populatePieceLocationFromInput: function(notation, colorArray, pieceArray) {
            let pieceLocation = 21;
            for (let notationIncrement = 0; notationIncrement < notation.length; notationIncrement++, pieceLocation++) {
                if (notation[notationIncrement] == "/") {
                    notationIncrement += 2;
                    pieceLocation += 2;
                } else if (parseInt(notation[notationIncrement]) == true) {
                    pieceLocation += parseInt(notation[notationIncrement]);
                } else {
                    for (let colorIncrement = 0; colorIncrement < 2; colorIncrement++) {
                        for (let pieceIncrement = 0; pieceIncrement < 6; pieceIncrement++) {
                            if (piece.colorArray[colorIncrement].pieceArray[pieceIncrement].piece == notation[notationIncrement]) {
                                piece.colorArray[colorIncrement].pieceArray[pieceIncrement].location.push(pieceLocation);
                                break;
                            }
                        }
                    }
                }
            }
        },
        rotateBoardNintyDegrees: function() {
            let tempArray = [];
            for (let incrementColor = 0; incrementColor < 2; incrementColor++) {
                for (let incrementPiece = 0; incrementPiece < 6; incrementPiece++) {
                    for (let incrementNumber = 0; incrementNumber < piece.colorArray[incrementColor].pieceArray[incrementPiece].location.length; incrementNumber++) {
                        let startValue = 0;
                        switch (Math.round(piece.colorArray[incrementColor].pieceArray[incrementPiece].location[incrementNumber] / 10) * 10) {
                            case 20:
                                startValue = 70;
                                break;
                            case 30:
                                startValue = 61;
                                break;
                            case 40:
                                startValue = 52;
                                break;
                            case 50:
                                startValue = 43;
                                break;
                            case 60:
                                startValue = 34;
                                break;
                            case 70:
                                startValue = 25;
                                break;
                            case 80:
                                startValue = 16;
                                break;
                            case 90:
                                startValue = 7;
                                break;
                        }
                        for (let squareIncrement = startValue + 1; squareIncrement < piece.colorArray[incrementColor].pieceArray[incrementPiece].location[incrementNumber] + 1;squareIncrement++) {
                            startValue = startValue - 11;
                        }
                        tempArray.push(piece.colorArray[incrementColor].pieceArray[incrementPiece].location[incrementNumber] + startValue);
                    }
                    piece.colorArray[incrementColor].pieceArray[incrementPiece].location = tempArray;
                }
            }
        },
        buildSolutionBoard: function() {
            for(let colorIncrement = 0; colorIncrement < 2; colorIncrement++) {
                for (let pieceIncrement = 0; pieceIncrement < 6; pieceIncrement++) {
                    for (let locationIncrement = 0; locationIncrement < piece.colorArray[colorIncrement].pieceArray[pieceIncrement].location.length; locationIncrement++) {
                        chessboard.notationOutput[piece.colorArray[colorIncrement].pieceArray[pieceIncrement].location[locationIncrement]] = piece.colorArray[colorIncrement].pieceArray[pieceIncrement].piece;
                    }
                }
            }
        },
        outputSolution: function() {
            let result = "";
            let blankCounter = 0;
            let nextRow = 29;
            for (let outputIncrement = 21; outputIncrement < 99; outputIncrement++) {
                if (outputIncrement = nextRow) {
                    nextRow += 10;
                    if (blankCounter > 0) {
                        result += blankCounter;
                        blankCounter = 0;
                    }
                    if (outputIncrement < 91){
                        result = result + "/";
                    } else {
                        return result;
                    }
                }  else if (chessboard.chessNotation[outputIncrement] == " ") {
                    blankCounter++;
                } else if (outputIncrement == 200) {
                    
                } else {
                    result += blankCounter;
                    result += chessboard.chessNotation[outputIncrement];
                    blankCounter = 0;
                }
            }
        },
        solve: function() {
            chessNotationReport.populatePieceLocationFromInput(notation);
            chessNotationReport.rotateBoardNintyDegrees();
            chessNotationReport.buildSolutionBoard();
            chessNotationReport.outputSolution();
        }
    }

    chessNotationReport.solve(colorArray,pieceArray);

}

chessNotation("rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR");
