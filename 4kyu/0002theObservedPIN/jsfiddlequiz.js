
function testQuestion(inputArray) {
    let result = [];
    let zeroSum = 0;
    let onOff = false;
    for (let i = 0, len = inputArray.length; i < len; i++) {
        if (inputArray[i] === 0) {
            zeroSum++;
        }
    }
    for (let j = 0, len2 = inputArray.length; j < len2; j++) {
        if (inputArray[j] > 0 && onOff === false) {
            result.push(inputArray[j]);
            onOff = true;
        } else if (inputArray[j] > 0 && onOff === true) {
            result[result.length - 1] = result[result.length - 1] + inputArray[j];
        } else if (inputArray[j] === 0 && result[result.length - 1] != 0) {
            result.push(0);
            onOff = false;
        } else {
            onOff = false;
        }
    }
    console.log(zeroSum);
    console.log(result);
}
testQuestion([0, 2, 5, 0, 0, 0, 0, 7, 2, 0, 0, 3, 4, 0, 1]);

/*
Status: Solved
*/