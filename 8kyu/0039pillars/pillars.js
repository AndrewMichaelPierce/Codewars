
function pillars(num_pill, dist, width) {
    let total = 0;
    for (let i = 1; i < num_pill; i++) {
        total += (dist * 100) + width;
    }
    if (num_pill > 1) {
        total -= width;
    }
    return total;
}
