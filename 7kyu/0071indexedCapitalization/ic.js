
function capitalize(s, arr) {
    let stringLength = s.length;
    let result = s.split("");
    for (let i = 0; i <= stringLength; i++) {
        if (arr[i] < stringLength) {
            let temp = result[arr[i]].toUpperCase();
            result[arr[i]] = temp;
        }
    }
    return result.join("");
}

/*
Status: Solved
*/