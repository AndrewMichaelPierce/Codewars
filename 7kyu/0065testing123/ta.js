
var number = function (array) {
    let result = [];
    for (let i = 1, len = array.length + 1; i < len; i++) {
        result.push(i + ": " + array[i - 1]);
    }
    return result;
}

/*
Status: Solved
*/