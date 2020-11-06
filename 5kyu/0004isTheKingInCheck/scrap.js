
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

