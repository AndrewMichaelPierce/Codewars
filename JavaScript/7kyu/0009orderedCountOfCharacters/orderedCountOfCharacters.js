
var orderedCount = function (text) {
    text = text.split("");
    let result = [];
    while (text.length > 0) {
        let x = 0;
        let first = text[0];
        for (let i = 0, len = text.length; i < len; i++) {
            if (first === text[i]) {
                x++;
            }
        }
        result.push([first, x]);
        for (let y = 0, len2 = text.length; y < len2; y++) {
            if (first === text[y]) {
                text.splice(y, 1);
            }
        }
        x = 0;
    }
    return result;
}

/*
Status: Solved
*/