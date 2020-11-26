
function pattern(rows, columns, str) {
    let result = "";
    let hl = "+";
    str = str.split("");
    for (i = 0; i < columns; i++) {
        hl += "---+";
    }
    result += hl;
    for (let x = 1; x < (rows * 2 + 1); x++) {
        if (x % 2 === 0 && x < rows * 2 + 1) {
            result += "\n" + hl;
        } else if (x % 2 === 0 && x === rows * 2 - 1) {
            result += "\n" + hl;
        } else {
            for (let y = 0; y < columns; y++) {
                if (y === 0) {
                    result += "\n" + "|";
                } if (y === columns + 1) {
                    result += "|" + "\n";
                } else if (y < str.length && y < columns + 1) {
                    result += " " + str[y] + " " + "|";
                } else if (y >= str.length) {
                    result += "   |";
                }
            }
        }
        if (x % 2 !== 0 && str.length > 0) {
            for (let z = 0; z < columns; z++) {
                str.shift();
            }
        }
    }
    return result
}

/*
Status: Solved
*/