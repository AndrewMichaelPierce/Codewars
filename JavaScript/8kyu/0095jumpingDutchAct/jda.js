
function sc(floor) {
    result = ["Pa!"];
    for (let i = 1; i < floor; i++) {
        result.unshift("Aa~ ");
    }
    if (floor < 2) {
        return "";
    } else if (floor < 7) {
        result.push(" Aa!");
        return result.join("");
    } else {
        return result.join("");
    }
}

/*
Status: Solved
*/