
function houseNumbersSum(inputArray) {
    let result = 0;
    for (let i = 0, len = inputArray.length; i < len && inputArray[i] != 0; i++) {
        result += inputArray[i];
    }
    return result;
}
