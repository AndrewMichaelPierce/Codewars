
function bingo(a) {
    let x = [2, 9, 14, 7, 15];
    let w = 0;
    for (let i = 0; i < a.length; i++) {
        for (let y = 0; y < x.length; y++) {
            if (a[i] === x[y]) {
                x.splice(y, 1);
                if (x.length === 0) {
                    return "WIN";
                }
            }
        }
    }
    return "LOSE";
}
