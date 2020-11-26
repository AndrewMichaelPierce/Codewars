
function invert(array) {
    let invertedArray = [];
    let y = array.length;
    for (let i = 0; i < y; i++) {
        let x = array.pop();
        if (x > 0) {
            x = -Math.abs(x);
        } else {
            x = Math.abs(x);
        }
        invertedArray.unshift(x);
    }
    return invertedArray;
}
