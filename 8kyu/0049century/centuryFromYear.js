
function century(year) {
    let y = 1;
    let m = 1;
    for (let i = 1; i < year; i++) {
        y++
        if (y === 101) {
            y = 1;
            m++;
        }
    }
    return m;
}
