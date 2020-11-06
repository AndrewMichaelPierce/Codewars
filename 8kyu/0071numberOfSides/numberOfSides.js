
var countSquares = function (cuts) {
    if (cuts === 0) {
        return 1;
    }
    let edge = cuts + 1;
    let side = edge * edge;
    let twoSide = side - edge;
    let fourSide = side - (edge * 2);
    let fifthSide = fourSide - ((edge - 2) * 2);
    return side + (twoSide * 2) + fourSide + (fifthSide * 2);
}

/*
Status: Solved
*/