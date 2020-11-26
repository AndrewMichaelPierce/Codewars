
function capitalize(s) {
    let x = s;
    s = s.split("");
    x = x.split("");
    for (let i = 0; i < s.length; i += 2) {
        s[i] = s[i].toUpperCase();
    }
    for (let i = 1; i < x.length; i += 2) {
        x[i] = x[i].toUpperCase();
    }
    return [s.join(""), x.join("")];
}
