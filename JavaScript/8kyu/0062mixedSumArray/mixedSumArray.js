
function sumMix(x) {
    function getSum(total, num) {
        return parseInt(total) + parseInt(num);
    }
    return parseInt(x.reduce(getSum));
}

/*
Status: Solved
*/
