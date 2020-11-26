
function matchArrays(v, r) {
    let result = 0, a = [], b = [];
    if (v.length > r.length) {
        a = v;
        b = r;
    } else {
        a = r;
        b = v;
    }
    for (let i = 0, len = a.length; i < len; i++) {
        if (b.includes(a[i])) {
            result++;
        }
    }
    return result;
}

/*
Status: Solved
*/