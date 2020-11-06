
function countPositivesSumNegatives(input) {
    if (input === null) {
        return [];
    }
    let positive = 0;
    let negative = 0;
    for (let i = 0, len = input.length; i < len; i++) {
        if (input[i] < 0) {
            negative += input[i];
        } else if (input[i] > 0) {
            positive += 1;
        }
    }
    if (positive === 0 && negative === 0) {
    return [];
    }
    return [positive, negative];
}

/*
Status: Solved
*/