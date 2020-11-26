
function solution(str, ending) {
    str = str.split("");
    while (str.length > ending.length) {
        str.shift();
    }
    str = str.join("");
    if (str === ending) {
        return true;
    } else {
        return false;
    }
}

/*
Status: Solved
*/