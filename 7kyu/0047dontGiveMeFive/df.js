
function dontGiveMeFive(start, end) {
    
    let numArray = [];
    let result = 0;

    for (let i = start; i < end + 1; i++) {
        numArray.push(i);
    }

    for (let x = 0, len = numArray.length; x < len; x++) {

        let tempString = numArray[x] + "";

        if (tempString.length > 1) {
            tempString = tempString.split("");
        }

        let stringLength = 0;

        for (let y = 0, len2 = tempString.length; y < len2; y++) {

            if (tempString[y] != 5) {
                stringLength += 1;
            }

            if (stringLength == tempString.length) {
                result += 1;
            }
        }
    }

    return result;
}
dontGiveMeFive(11, 20);
