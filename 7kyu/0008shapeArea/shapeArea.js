
function shapeArea(n) {
    let center = n * 2 - 1;
    let half = 0;
    for (let i = center - 2; i > 0; i -= 2) {
        half += i;
    }
    return half * 2 + center;
}
