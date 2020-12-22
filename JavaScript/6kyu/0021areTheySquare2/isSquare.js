function isSquare(input) {
    if (input == 1) {
        console.log("True");
        return true;
    }
    let halfInput = input / 2;
    for (let i = 1; i <= halfInput; i++) {
        if (i * i == input) {
            console.log("True");
            return true;
        }
    }
    console.log("False");
    return false;
}

isSquare(4);