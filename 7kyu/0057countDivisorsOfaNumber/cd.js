
function getDivisorsCnt(n) {
    let result = 1;
    let half = Math.ceil(n / 2);
    for (let i = 0; i < half + 1; i++) {
        if (n % i == 0) {
            result++;
        }
    }
    if (n == 1) {
        return 1;
    }
    return result;
}

/*
Status: Solved
*/