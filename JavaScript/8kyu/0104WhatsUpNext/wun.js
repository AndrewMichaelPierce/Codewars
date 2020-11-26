
function nextItem(xs, item) {
    console.log(typeof xs);
    for (let i = 0, len = xs.length; i < len; i++) {
        if (xs[i] === item) {
            return xs[i + 1];
        }
    }
    return undefined;
}

/*
Status: Unsolved
*/