
function twoSort(s) {
    s = s.sort();
    let result = "";
    for (let i = 0, len = s[0].length; i < len; i++) {
        if (i < s[0].length - 1) {
            result += s[0][i] + "***"
        } else {
            result += s[0][i];
        }
    }
    return result;
}

/*
Status:
*/