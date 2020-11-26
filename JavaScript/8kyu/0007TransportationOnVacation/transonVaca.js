
function rentalCarCost(d) {
    if (d > 6) {
        return (40 * d) - 50;
    } else if (d < 2) {
        return 40 * d;
    } else {
        return (40 * d) - 20;
    }
}
