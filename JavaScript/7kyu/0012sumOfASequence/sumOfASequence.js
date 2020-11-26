
const sequenceSum = (begin, end, step) => {
    let result = [];
    if (begin < end) {
        for (let i = begin; i <= end; i += step) {
            result.push(i);
        }
        function getSum(a, b) {
            return a + b;
        }
        return result.reduce(getSum);
    }
    return 0;
};

sequenceSum(2, 6, 2)

/*
Status: Solved
*/
