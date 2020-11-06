
function sumOfNumbers(count) {
    if (count == 0) {
        return "0=0";
    } else if (count < 0) {
        return count + "<0";
    } else {
        let result = 0;
        let resultString = "0";
        for (let i = 1; i < count + 1; i++) {
            result += i;
            resultString += "+" + i;
        }
        console.log(resultString += " = " + result);
        return resultString += " = " + result;
    }
}

sumOfNumbers(5);

/*
Status: Solved
*/