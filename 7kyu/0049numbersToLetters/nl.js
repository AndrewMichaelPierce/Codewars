
function switcher(x){
    let result = "";
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let back = [];
    alpha = alpha.split("");
    for (let i = 0, x = 26; i < 27; i++, x--) {
        back[i] = alpha[x];
    }
    for (let y = 0, len2 = x.length; y < len2; y++) {
        if ([x[y]] == 27) {
            result += "!";
        } else if ([x[y]] == 28) {
            result += "?";
        } else if ([x[y]] == 29) {
            result += " ";
        } else {
            result += back[x[y]];
        }
    }
    return result;
}

switcher();
