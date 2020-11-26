
function isVeryEvenNumber(n) {
    let result = n;
    let temp = 0;
    while (result > 9) {
        result = result.toString();
        for (let i = 0, len = result.length; i < len; i++) {
            temp += Number(result[i]);
        }
        result = temp;
        temp = 0;
    }
    if (result == 0) {
      return true;
    } else if (result % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

isVeryEvenNumber(405);

/*
Status: Solved
*/