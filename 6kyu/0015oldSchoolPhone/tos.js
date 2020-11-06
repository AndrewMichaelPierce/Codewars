
const sendMessage = message => {
    let temp = [];
    let result = [];
    let changedLetter = false;
    let lastAlpha = 0;
    let capitalString = false;

    for (let i = 0, len = message.length; i < len; i++) {
        temp.push(message.charCodeAt(i));
    }

    function checkPreviousLetter(against) {
        if (result.length >= 1) {
            let string = result[result.length - 1];
            let stringEnd = string.charAt(string.length - 1);
            if (stringEnd == against) {
                result.push(" ");
            }
        }
    }

    function changedLetterFunction(temp, x) {
        if (changedLetter === true) {
            changedLetter = false;
            temp[x] = temp[x] - 32;
        };
    }

    function checkCase(temp, x, lastAlpha) {
        console.log("LastAlpha " + lastAlpha);
        console.log("Temp LastAlpha " + temp[lastAlpha]);
        console.log("Temp X " + temp[x]);
        console.log(" ");
        if ((temp[lastAlpha] > 64 && temp[lastAlpha] < 91) && (temp[x] > 96 && temp[x] < 123)) {
            result.push("#");
        } else if (((temp[lastAlpha] > 96 && temp[lastAlpha] < 123) && (temp[x] > 64 && temp[x] < 91)) || ((x === 0) && (temp[0] > 64 && temp[0] < 91)) || (changedLetter === true && temp[0] > 64 && temp[0] < 91)) {
            result.push("#");
            temp[x] = temp[x] + 32;
            changedLetter = true;
        } else if ((temp[lastAlpha] > 64 && temp[lastAlpha] < 91) && (temp[x] > 64 && temp[x] < 91)) {
            temp[x] = temp[x] + 32;
            changedLetter = false;
            capitalString = true;
        }
    }

    for (let x = 0, len2 = temp.length; x < len2; x++) {
        checkCase(temp, x, lastAlpha);
        switch (temp[x]) {
            case 97:
                checkPreviousLetter("2");
                changedLetterFunction(temp, x);
                result.push("2");
                break;
            case 98:
                checkPreviousLetter("2");
                changedLetterFunction(temp, x);
                result.push("22");
                break;
            case 99:
                checkPreviousLetter("2");
                changedLetterFunction(temp, x);
                result.push("222");
                break;
            case 100:
                checkPreviousLetter("3");
                changedLetterFunction(temp, x);
                result.push("3");
                break;
            case 101:
                checkPreviousLetter("3");
                changedLetterFunction(temp, x);
                result.push("33");
                break;
            case 32:
                checkPreviousLetter("0");
                result.push("0");
                break;
            case 35:
                result.push("#-");
                break;
            case 42:
                result.push("*-");
                break;
        }
        if ((temp[x] > 64 && temp[x] < 91) || (temp[x] > 96 && temp[x] < 123)) {
            lastAlpha = x;
        }
        if (capitalString === true) {
            capitalString = false;
            temp[x] = temp[x] - 32;
        }
    }
    console.log(result.join(""));
}

sendMessage("#Ada Da Da");