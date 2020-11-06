
function divisibleBy(numbers, divisor) {
    let result = [];
    for (let i = 0, len = numbers.length; i < len; i++) {
        if (numbers[i] % divisor === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}

/*
Status: Solved
*/