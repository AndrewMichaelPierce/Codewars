
function testit(n) {
    let result = [];
    if (n >= 1) {
        for (let i = 1; i < n + 1; i++) {
            if (n % i == 0 && i % 2 != 0) {
                result.push(i);
            }
        }
    }
    return result;
}

/*
Status: Solved
*/