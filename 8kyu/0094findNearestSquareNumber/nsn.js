

/*
// Following code took to long...
function nearestSq(n) {
    let m = n;
    let z = n;
    let result = 0;
    let result2 = 0;
    do {
        if (z === 1) {
            return 1;
        }
        z++;
        for (let i = 0, half = Math.floor(i / 2); i < half; i++) {
            if (i * i === z) {
                result = z;
            } else {
                continue;
            }
        }
    }
    while (result === 0);
    do {
        if (m === 1) {
            return 1;
        }
        m--;
        for (let i = 0, half = Math.floor(i / 2); i < half; i++) {
            if (i * i === m) {
                result2 = m;
            } else {
                continue;
            }
        }
    }
    while (result2 === 0);
    if (result === result2) {
        return result;
    }
    if (n - result2 < result - n) {
        return result2;
    } else {
        return result;
    }
}
*/

function nearestSq(n) {
    let squares = [];
    let temp = 0;
    for (let i = 1; i * i < n; i++) {
        squares.push(i * i);
        temp = i;
    }
    squares.push(n);
    squares.push((temp + 1) * (temp + 1));
    squares.sort(function(a, b){return a-b});
    for (let i = 0, len = squares.length; i < len; i++) {
        if (squares[i] === n) {
            if (n - squares[i - 1] < squares[i + 1] - n) {
                return squares[i - 1];
            } else {
                return squares[i + 1];
            }
        }
    }
}

/*
Status: Solved
*/