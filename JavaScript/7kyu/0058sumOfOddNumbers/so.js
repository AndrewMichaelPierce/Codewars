
function rowSumOddNumbers(n) {
    if (n == 1) {
        return 1;
    }
    let result = 0;
    let firstNumberInRow = 1;
    for (let i = 1, even = 2; i < n; i++, even += 2) {
        firstNumberInRow += even;
    }
    for (let i = 0; i < n; i++, firstNumberInRow += 2) {
        result += firstNumberInRow;
    }
    return result;
}

rowSumOddNumbers(3);

/*
Status: Solved
*/