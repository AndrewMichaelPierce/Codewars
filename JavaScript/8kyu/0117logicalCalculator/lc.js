
function logicalCalc(array, op) {
    let result = true;
    let andFalse = 1;
     if (array.length == 1) {
         return array[0];
     }
    let y = true;
    for (let x = 0, len = array.length; x < len - 1; x++) {
            if (op == "AND") {
                logAnd(array[x], array[x + 1]);
            } else if (op == "OR") {
                logOr(array[x], array[x + 1], x);
            } else if (op == "XOR") {
                logX(array[x], array[x + 1], x);
            }
    }
    function logAnd(a, b) {
        if (a && b == true) {
            result = true;
        } else {
            result = false;
            andFalse = -1;
        }
    }
    function logOr(a, b, y, x) {
        if (x == 0) {
            y = a;
        }
        if (y || b == true) {
            result = true;
        } else {
            result = false;
        }
    }
    function logX(a, b, x) {
        if (x == 0) {
            y = a;
        }
        if ((y == true && b == false) || (y == false && b == true)) {
            result = true;
            y = true;
        } else {
            y = false;
            result = false;
        }
    }
    if (andFalse == -1) {
      return false;
    }
    return result;
}

logicalCalc([true, true, false, false], "XOR");

/*
Status: Solved
*/