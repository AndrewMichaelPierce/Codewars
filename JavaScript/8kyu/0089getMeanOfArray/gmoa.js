
function getAverage(marks) {
    let result = 0;
    for (let i = 0, len = marks.length; i < len; i++) {
        result += marks[i];
    }
    return Math.floor(result / marks.length);
}

/*
Status: Solved
*/