
function createPhoneNumber (numbers) {
    let result = "(";
    for (let i = 0; i < 3; i++) {
        result += numbers[i];
    }
    result += ") ";
    for (let i = 3; i < 6; i++) {
        result += numbers[i];
    }
    result += "-";
    for (let i = 6; i < 10; i++) {
        result += numbers[i];
    }
    console.log(result);
    return result;
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

/*
Status: Solved
*/