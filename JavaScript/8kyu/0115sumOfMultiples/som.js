
function sumMul(n, m) {
    if (n > m) {
        return "INVALID";
    }
    let result = [];
    let sum = n;
    for (let increment = 0; increment < m; increment++) {
        sum += n;
        if (sum < increment) {
            result.push(sum);
        } else {
            return result;
        }
    }
}

/*
Status:
*/