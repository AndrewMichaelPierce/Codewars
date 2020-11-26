
function largestPower(n) {
    for (let i = 0; i < n; i++) {
        if (n === 1) {
            return -1;
        } else if (Math.pow(3, i) >= n) {
            if (i === 0) {
                return 0;
            } else {
                return i - 1;
            }
        }
    }
}

/*
Status: Solved
*/