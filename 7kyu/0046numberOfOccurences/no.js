
Array.prototype.numberOfOccurrences = function (x) {
    let result = 0;
    console.log(Array.prototype);
    for (let i = 0, len = this.length; i < len; i++) {
        if (x === this[i]) {
            result += 1;
        }
    }
    return result;
}

/*
Status: Solved
*/