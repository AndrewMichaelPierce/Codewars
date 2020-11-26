
function blackOrWhiteKey(keyPressCount) {
    let series = "white black white white black white black white white black white black";
    let end = "white black white white";
    series = series.split(" ");
    end = end.split(" ");
    let keys = [];
    for (let x = 0; x < 7; x++) {
      keys = keys.concat(series);
    }
    keys = keys.concat(end);
    for (let y = 0; y < 7; y++) {
        keys = keys.concat(keys);
    }
    return keys[keyPressCount - 1];
}

/*
Status: Solved
*/
function arrayPlusArray(arr1, arr2) {
    let result = arr1.concat(arr2);
    function getSum(total, num) {
        return total + num;
    }
    return result.reduce(getSum);
}

/*
Status:
*/