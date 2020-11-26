
function divisibleByThree(str){
    let strSum = "0";
    for (let i = 0, len = str.length; i < len; i++) {
        strSum += str[i];
        if (strSum % 3 === 0) {
            strSum = '';
        }
    }
    if (strSum % 3 === 0) {
        return true;
    } else {
        return false;
    }
}

/*
Status: Solved
*/