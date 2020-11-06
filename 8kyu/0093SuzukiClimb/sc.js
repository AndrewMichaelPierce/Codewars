
function stairsIn20(s){
    function sumArray(total, num) {
        return total + num;
    }
    let result = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        result += s[i].reduce(sumArray);
    }
    return result * 20;
}

/*
Status: Solved
*/