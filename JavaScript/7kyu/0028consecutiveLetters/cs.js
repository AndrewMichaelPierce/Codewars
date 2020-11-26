
function solve(s) {
    s = [...s].sort().join``;
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;
    while (i < 26) {
        if (alphabet[i] === s[0]) {
            for (let x = 0; x < s.length; x++ , i++) {
                if (s[x] != alphabet[i]) {
                    return false;
                } else if (x === s.length - 1) {
                    return true;
                }
            }
        }
        i++;
    }
}

/*
Status: Solved
*/