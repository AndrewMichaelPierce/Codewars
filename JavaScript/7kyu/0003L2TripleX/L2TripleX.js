
function tripleX(str) {
    let x = 0;
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "x" && x >= 1) {
            return false;
        } else if (str[i] === "x" && x < 3) {
            x++;
            if (x === 3) {
                return true;
            }
        }
    }
    return false;
}
