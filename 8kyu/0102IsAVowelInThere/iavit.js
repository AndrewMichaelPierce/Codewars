
function isVow(a) {
    let newArray = [];
    let lowerVowels = ["a", "e", "i", "o", "u"];
    for (let i = 0, len = a.length; i < len; i++) {
        let match = false;
        for (let x = 0; x < 5; x++) {
            if (String.fromCharCode(a[i]) === lowerVowels[x]) {
                newArray.push(lowerVowels[x]);
                match = true;
            }
        }
        if (match === false) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

/*
Status: Solved
*/