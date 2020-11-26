
function repeatStr (n, s) {
    let x = s;
    for(let i = 1; i < n; i++) {
        s = s + x;
    }
    return s;
}
