
function printerError(s) {
    let good = "abcdefghijklm";
    good = good.split("");
    s = s.split("");
    let errors = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        for (let n = 0, len2 = good.length; n < len2; n++) {
            if (s[i] === good[n]) {
                break;
            } else if (n === len2 - 1) {
                errors += 1;
            } else {
                continue;
            }
        }
    }
    return errors + "/" + s.length;
}

/*
Status: Solved
*/