
let values = {
    0: {
        itemValue: 0,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [1, 2],
        forcedPosition: 5,
        finalPosition: false
    },
    1: {
        itemValue: 1,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [1],
        forcedPosition: 5,
        finalPosition: false
    },
    2: {
        itemValue: 2,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [0, 2],
        forcedPosition: 5,
        finalPosition: false
    },
    3: {
        itemValue: 3,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [1],
        forcedPosition: 5,
        finalPosition: false
    },
    4: {
        itemValue: 4,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [2],
        forcedPosition: 5,
        finalPosition: false
    },
    5: {
        itemValue: 5,
        notUsed: 2,
        correctPosition: 5,
        wrongPosition: [],
        position: [],
        forcedPosition: 5,
        finalPosition: false
    },
    6: {
        itemValue: 6,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [0, 0, 2],
        forcedPosition: 5,
        finalPosition: false
    },
    7: {
        itemValue: 7,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [0],
        forcedPosition: 5,
        finalPosition: false
    },
    8: {
        itemValue: 8,
        notUsed: 0,
        correctPosition: 5,
        wrongPosition: [],
        position: [2],
        forcedPosition: 5,
        finalPosition: false
    }
}

let result = [];

let allWrong = [7, 3, 8];
let oneRight = [6, 8, 2];
let oneWrong = [6, 1, 4];
let twoWrong = [2, 0, 6];
let oneWrong2 = [7, 8, 0];

let allArrays = [allWrong, oneRight, oneWrong, oneWrong2, twoWrong];

let checkAllWrong = allWrong => {
    for (let i = 0; i < allWrong.length; i++) {
        values[allWrong[i]].notUsed = 2;
    }
}

let removeBadValues = allArrays => {
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 4; y++) {
                if ((values[i].notUsed == 2) && (allArrays[x][y] == values[i].itemValue)) {
                    allArrays[x][y] = 5;
                }
            }
        }
    }
}

let checkForRemainingValues = allArrays => {
    let invalids = 0;
    for (let x = 1; x < 5; x++) {
        for (let y = 0; y < 4; y++) {
            if ((allArrays[x][y]) == 5) {
                invalids++;
            }
            if (invalids == 2) {
                for (let n = 0; n < 3; n++) {
                    if (allArrays[x][n] != 5) {
                        values[allArrays[x][n]].notUsed = 1;
                        invalids = 0;
                    }
                }
            }
        }
    }
}

let numberSieve = values => {
    for (let i = 0; i < 9; i++) {
        if (values[i].notUsed == 1 && values[i].correctPosition < 5) {
            values[i].finalPosition = true;
            for (let x = 1; x < allArrays.length; x++) {
                for (let y = 0; y < allArrays[x].length; y++) {
                    if (values[i].itemValue == allArrays[x][y]) {
                        values[allArrays[x][y]].notUsed = 2;
                        allArrays[x][y] = 5;
                    }
                }
            }
        }
    }
}

let absolutePositionCheck = fixedArray => {
    for (let i = 0; i < fixedArray.length; i++) {
        values[fixedArray[i]].forcedPosition = i;
    }
}

let finalPosition = values => {
    for (let i = 0; i < 4; i++) {
        if (values[i].finalPosition == true) {
            return true;
        }
    }
}

let removeAbsoluteErrors = (inputArray, values) => {
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < inputArray.length; x++) {
            if ((values[i].forcedPosition == x) && (values[i].itemValue == inputArray[x])) {
                values[i].notUsed = 2;
                inputArray[x] = 5;
            }
        }
    }
}

let checkOneRight = oneRight => {
    let sieveCount = 0;
    for (let i = 0; i < oneRight.length; i++) {
        if (oneRight[i] == 5) {
            sieveCount++;
            if (sieveCount == 2) {
                for (let x = 0; x < oneRight.length; x++) {
                    if (oneRight[x] != 5) {
                        values[oneRight[x]].finalPosition = true;
                        values[oneRight[x]].notUsed = 1;
                        values[oneRight[x]].correctPosition = x;
                        for (let r = 2; r < allArrays.length; r++) {
                            for (let s = 0; s < allArrays[r].length; s++) {
                                if (allArrays[r][s] == oneRight[x]) {
                                    allArrays[r][s] = 5;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

let calculateWrongPosition = allArrays => {
    for (let i = 2; i < allArrays.length; i++) {
        for (let x = 0; x < allArrays[i].length; x++) {
            if ((allArrays[i][x] != 5) && (values[allArrays[i][x]].finalPosition == false)) {
                values[allArrays[i][x]].wrongPosition.push(x);
            }
        }
    }
}

let rightNumberOnePositionCheck = values => {
    for (let i = 0; i < 9; i++) {
        for (let x = 0; x < 3; x++) {
            if ((values[i].notUsed == 1) && (values[i].wrongPosition.length == 2) && (values[i].wrongPosition.includes(x) == false)) {
                values[i].finalPosition = true;
                values[i].correctPosition = x;
            }
        }
    }
}

let populateResult = values => {
    result = [10, 10, 10];
    for (let i = 0; i < 9; i++) {
        if (values[i].correctPosition < 5) {
            result[values[i].correctPosition] = values[i].itemValue;
        }
    }
}

let checkOneWrongGroup = (allArrays, result) => {
    for (let r = 0; r < result.length; r++) {
        for (let i = 2; i < 4; i++) {
            for (let x = 0; x < allArrays[i].length; x++) {
                if (allArrays[i][x] != 5) {
                    if ((result[r] == 10) && (x != r) && (values[allArrays[i][x]].finalPosition == false)) {
                        result[r] = allArrays[i][x];
                    }
                }
            }
        }
    }

}

checkAllWrong(allArrays[0]);
absolutePositionCheck(allArrays[1]);
removeAbsoluteErrors(allArrays[2], values);
removeAbsoluteErrors(allArrays[3], values);
removeAbsoluteErrors(allArrays[4], values);
removeBadValues(allArrays);
checkForRemainingValues(allArrays);
numberSieve(values);
checkOneRight(allArrays[1]);
calculateWrongPosition(allArrays);
rightNumberOnePositionCheck(values);
populateResult(values);
checkOneWrongGroup(allArrays, result);
console.log(result.join(""));
