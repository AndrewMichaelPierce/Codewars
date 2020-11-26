
function defineSuit(card) {
    switch (card[card.length - 1]) {
        case "♣": return "clubs";
            break;
        case "♦": return "diamonds";
            break;
        case "♥": return "hearts";
            break;
        case "♠": return "spades";
    }
}

/*
Status: Solved
*/