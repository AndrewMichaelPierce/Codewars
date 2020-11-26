
function solve(n) {
    let denominations = [10, 20, 50, 100, 200, 500];
    let result = 0;
    for (let i = 5; i > -1; i--) {
        while (n / denominations[i] >= 1 || (n / denominations[i] == 0 && n - denominations[i] == 0)) {
            result++;
            n -= denominations[i];
        }
    }
    if (n > 0) {
        return -1;
    } else {
        return result;
    }
}

solve(770);
