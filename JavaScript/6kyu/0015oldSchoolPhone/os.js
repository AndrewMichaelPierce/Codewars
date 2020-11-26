
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
            case 32:
                checkPreviousLetter("0");
                result.push("0");
                break;
            case 46:
                checkPreviousLetter("1");
                result.push("1");
                break;
            case 44:
                checkPreviousLetter("1");
                result.push("11");
                break;
            case 63:
                checkPreviousLetter("1");
                result.push("111");
                break;
            case 33:
                checkPreviousLetter("1");
                result.push("1111");
                break;
            case 39:
                checkPreviousLetter("*");
                result.push("*");
                break;
            case 45:
                checkPreviousLetter("*");
                result.push("**");
                break;
            case 43:
                checkPreviousLetter("*");
                result.push("***");
                break;
            case 61:
                checkPreviousLetter("*");
                result.push("****");
                break;
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
            case 102:
                checkPreviousLetter("3");
                changedLetterFunction(temp, x);
                result.push("333");
                break;
            case 103:
                checkPreviousLetter("4");
                changedLetterFunction(temp, x);
                result.push("4");
                break;
            case 104:
                checkPreviousLetter("4");
                changedLetterFunction(temp, x);
                result.push("44");
                break;
            case 105:
                checkPreviousLetter("4");
                changedLetterFunction(temp, x);
                result.push("444");
                break;
            case 106:
                checkPreviousLetter("5");
                changedLetterFunction(temp, x);
                result.push("5");
                break;
            case 107:
                checkPreviousLetter("5");
                changedLetterFunction(temp, x);
                result.push("55");
                break;
            case 108:
                checkPreviousLetter("5");
                changedLetterFunction(temp, x);
                result.push("555");
                break;
            case 109:
                checkPreviousLetter("6");
                changedLetterFunction(temp, x);
                result.push("6");
                break;
            case 110:
                checkPreviousLetter("6");
                changedLetterFunction(temp, x);
                result.push("66");
                break;
            case 111:
                checkPreviousLetter("6");
                changedLetterFunction(temp, x);
                result.push("666");
                break;
            case 112:
                checkPreviousLetter("7");
                changedLetterFunction(temp, x);
                result.push("7");
                break;
            case 113:
                checkPreviousLetter("7");
                changedLetterFunction(temp, x);
                result.push("77");
                break;
            case 114:
                checkPreviousLetter("7");
                changedLetterFunction(temp, x);
                result.push("777");
                break;
            case 115:
                checkPreviousLetter("7");
                changedLetterFunction(temp, x);
                result.push("7777");
                break;
            case 116:
                checkPreviousLetter("8");
                changedLetterFunction(temp, x);
                result.push("8");
                break;
            case 117:
                checkPreviousLetter("8");
                changedLetterFunction(temp, x);
                result.push("88");
                break;
            case 118:
                checkPreviousLetter("8");
                changedLetterFunction(temp, x);
                result.push("888");
                break;
            case 119:
                checkPreviousLetter("9");
                changedLetterFunction(temp, x);
                result.push("9");
                break;
            case 120:
                checkPreviousLetter("9");
                changedLetterFunction(temp, x);
                result.push("99");
                break;
            case 121:
                checkPreviousLetter("9");
                changedLetterFunction(temp, x);
                result.push("999");
                break;
            case 122:
                checkPreviousLetter("9");
                changedLetterFunction(temp, x);
                result.push("9999");
                break;
            case 48:
                result.push("0-");
                break;
            case 49:
                result.push("1-");
                break;
            case 50:
                result.push("2-");
                break;
            case 51:
                result.push("3-");
                break;
            case 52:
                result.push("4-");
                break;
            case 53:
                result.push("5-");
                break;
            case 54:
                result.push("6-");
                break;
            case 55:
                result.push("7-");
                break;
            case 56:
                result.push("8-");
                break;
            case 57:
                result.push("9-");
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
    return result.join("");
}
sendMessage(".,!?-+='");
sendMessage("Hello World!");
sendMessage("WmWm");
