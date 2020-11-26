
function pyramid(n) {
    let result = [];
    if (n > 0) {
        for (let x = 0; x < n; x++) {
            let step = [];
            step.unshift("\\");
            for (let i = 0; i < x; i++) {
                if (x === n - 1) {
                    step.unshift("__");
                } else {
                    step.unshift("  ");
                }
            }
            step.unshift("/");
            for (let y = 0; y < n - x - 1; y++) {
                step.unshift(" ");
            }
            step.push("\n");
            step = step.join("");
            result.push(step);
        }
    }
    result = result.join("");
    console.log(result);
    return result;
}

/*
Status: Solved
*/