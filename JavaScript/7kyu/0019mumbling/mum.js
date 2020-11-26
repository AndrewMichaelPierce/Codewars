
function accum(s) {
    s = s.toLowerCase();
    s = s.split("");
    result = [];
    for (let i = 0, len = s.length; i < len; i++) {
        let x = s.shift();
        for (let n = 0; n <= i; n++) {
            if (n === 0) {
                result.push(x.toUpperCase());
            } else {
                result.push(x);
            }
        }
        if (i === len - 1) {
            result = result.join("");
        } else {
            result.push("-");
        }
    }
    return result;
}

/*
Status: Solved
*/