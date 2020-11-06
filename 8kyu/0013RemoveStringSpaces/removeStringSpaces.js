
function noSpace(x){
    let y = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== " ") {
            y.push(x[i]);
        }
    }
    return y.join("");
}
