
function findSum(number) {
    let result = 0;
    for (let i = 0; i < number + 1; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    return result;
}

/*
Status: Solved
*/