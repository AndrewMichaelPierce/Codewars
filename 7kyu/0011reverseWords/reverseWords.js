
function reverseWords(str) {
    str = str.split(" ");
    for (let i = 0, len = str.length; i < len; i++) {
        str[i] = str[i].split("").reverse().join("");
    }
    str = str.join(" ");
    return str;
}

reverseWords('The quick brown fox jumps over the lazy dog.')

/*
Status: Solved
*/