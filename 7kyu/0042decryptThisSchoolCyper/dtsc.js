
function encrypt (str) {
    str = str.split("");
    str.reverse();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() === 32 || str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) {
            result.push(i);
        } else {
            result.push(str[i].charCodeAt());
        }
    }
    console.log(result.join("'"));
    return result.join("'");
}

function decrypt (str) {
    str = str.split("'").reverse();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if ((str[i] > 64 && str[i] < 91) || (str[i] > 96 && str[i] < 123)) {
            result.push(String.fromCharCode(str[i]));
        } else {
            result.push(str[i].split("").reverse().join(""));
        }
    }
    console.log(result.join(""));
    return result.join("");
}
// encrypt("test");
decrypt(encrypt("test"));

/*
Status: Semi-Solved
*/