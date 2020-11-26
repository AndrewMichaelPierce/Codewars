
function noOdds(values) {
    let result = [];
    for (let i = 0, len = values.length; i < len; i++) {
        if (values[i] % 2 == 0) {
            result.push(values[i]);
        }
    }
    console.log(result);
    return result;
}

noOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Status: Solved
*/