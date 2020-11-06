
function scoreHand(cards) {

    let sumOfCards = [0, 0, 0, 0, 0];
    let aceCount = 0;
    let differenceArray = [0, 0, 0, 0, 0];
    let under21Array = [];

    function distributeSums (amount) {
        for (let y = 0; y < 5; y++) {
            sumOfCards[y] = sumOfCards[y] + amount;
        }
    }

    let aceArray = {
        1: [1, 11, 11, 11, 11],
        2: [1, 1, 11, 11, 11],
        3: [1, 1, 1, 11, 11],
        4: [1, 1, 1, 1, 11] 
    }

    function distributeAceCounts (aceCount) {
        for (let s = 0; s < 5; s++) {
            sumOfCards[s] = sumOfCards[s] + aceArray[aceCount][s];
        }
    }

    for (let i = 0, len = cards.length; i < len; i++) {
        switch (cards[i]) {
            case "K":
                distributeSums(10);
                break;
            case "Q":
                distributeSums(10);
                break;
            case "J":
                distributeSums(10);
                break;
            case "10":
                distributeSums(10);
                break;
            case "9":
                distributeSums(9);
                break;
            case "8":
                distributeSums(8);
                break;
            case "7":
                distributeSums(7);
                break;
            case "6":
                distributeSums(6);
                break;
            case "5":
                distributeSums(5);
                break;
            case "4":
                distributeSums(4);
                break;
            case "3":
                distributeSums(3);
                break;
            case "2":
                distributeSums(2);
                break;
            case "A":
                aceCount += 1;
                distributeAceCounts(aceCount);
        }
    }

    for (let c = 0; c < 5; c++) {
        if (21 - sumOfCards[c] >= 0) {
            under21Array.push(c);
        }
    }

    if (under21Array.length > 0) {
        let under21 = 0;
        for (let d = 0, lend = under21Array.length; d < lend; d++) {
            if (sumOfCards[under21Array[d]] > under21) {
                under21 = sumOfCards[under21Array[d]];
            }
        }
        return under21;
    }

    let diffTemp = 1000;

    for (let b = 0; b < 5; b++) {
        differenceArray[b] = Math.abs(21 - sumOfCards[b]);
        if (differenceArray[b] < diffTemp) {
            diffTemp = b;
        }
    }

    return sumOfCards[diffTemp];
}

scoreHand(["A", "2", "A", "9", "9"]);
