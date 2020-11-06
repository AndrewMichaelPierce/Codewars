
function points(games) {
    let total = 0;
    games = games.join("");
    for (let i = 0; i < games.length; i++) {
        let x = games[i];
        i += 2;
        let y = games[i];
        if (x > y) {
            total += 3;
        } else if (x === y) {
            total += 1;
        }
    }
    return total;
}
