
function getMiddle(s) {
    s.split[""];
    let result = [];
    if (s.length % 2 !== 0) {
        result.push(s[Math.floor(s.length / 2)]);
    } else {
        result.push(s[s.length / 2 - 1]);
        result.push(s[s.length / 2]);
    }
    return result.join("");
}

/*
Status: Solved
*/