
function whoIsPaying(name) {
    let temp = [];
    let result = [name];
    if (name.length <= 2) {
        return result;
    } else {
        result[1] = name.substring(0, 2);
        return result;
    }
}

/*
Status: Solved
*/