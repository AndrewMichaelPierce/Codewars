
function solve(arr) {
    let greatest = [];
    let total = 1;
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i].sort(function (a, b) { return b - a });
        console.log(arr[i]);
        greatest.push(arr[i][0]);
        console.log(arr[i][0]);
    }
    for (let x = 0, len2 = greatest.length; x < len2; x++) {
        console.log(total);
        total *= greatest[x];
        console.log(total);
    }
    return total;
}

/*
Status: Unsolved
*/