
function grow(x) {
    let result = 0;
    for (let i = 0, len = x.length; i < len; i++) {
        if (i === 0) {
            result = x[i];
        } else {
            result *= x[i];
        }
    }
    return result;
}

/*
Status: Solved
*/