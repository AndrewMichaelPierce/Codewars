
function battleOutcome(attacker, defender) {
    attacker.sort().reverse();
    defender.sort().reverse();
    let dTotal = 0;
    let aTotal = 0;
    for (let i = 0, len = attacker.length; i < len; i++) {
        if (i > defender.length - 1) {
            break;
        }
        if (attacker[i] > defender[i]) {
            aTotal += 1;
        } else {
            dTotal += 1;
        }
    }
    return [dTotal, aTotal];
}

/*
Status: Solved
*/