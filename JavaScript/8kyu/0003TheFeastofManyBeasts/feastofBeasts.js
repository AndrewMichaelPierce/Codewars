
function feast(beast, dish) {
    beast = beast.split("");
    dish = dish.split("");
    if (beast.unshift() !== beast.unshift()) {
        return false;
    } else if (beast.pop() !== dish.pop()) {
        return false;
    } else {
    return true;
    }
}
