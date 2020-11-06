
function errBob(string) {
    string = string + "e";
    let splitString = string.split(" ");
    let punctuation = false;
    for (let i = 0, len = splitString.length; i < len; i++) {
        let lastLetter = "";
        lastLetter = splitString[i].split("").pop();
        lastLetter = lastLetter.charCodeAt(0);
        if (lastLetter > 32 && lastLetter < 65) {
            lastLetter = splitString[i].split("");
            lastLetter = lastLetter[lastLetter.length - 2];
            lastLetter = lastLetter.charCodeAt(0);
            punctuation = true;
        }
        if (lastLetter == 65 || lastLetter == 69 || lastLetter == 73 || lastLetter == 79 || lastLetter == 85 ||
            lastLetter == 97 || lastLetter == 101 || lastLetter == 105 || lastLetter == 151 || lastLetter == 111 || lastLetter == 117) {
        } else {
            if (lastLetter > 64 && lastLetter < 91) {
                if (punctuation === true) {
                    let punctTemp = [];
                    splitString[i] = splitString[i].split("");
                    punctFix: for (let c = 0, newLen = splitString[i].length; c < newLen; c++) {
                        if (c == newLen - 1) {
                            punctTemp.push("ERR");
                            punctTemp.push(splitString[i][newLen - 1]);
                            splitString[i] = punctTemp.join("");
                            break punctFix;
                        }
                        punctTemp.push(splitString[i][c]);
                    };
                    splitString[i] = punctTemp.join("");
                } else {
                    splitString[i] = splitString[i] + "ERR";
                }
            } else if (lastLetter > 96 && lastLetter < 123) {
                if (punctuation === true) {
                    let punctTemp = [];
                    splitString[i] = splitString[i].split("");
                    punctFix2: for (let c = 0, newLen = splitString[i].length; c < newLen; c++) {
                        if (c == newLen - 1) {
                            punctTemp.push("err");
                            punctTemp.push(splitString[i][newLen - 1]);
                            splitString[i] = punctTemp.join("");
                            break punctFix2;
                        }
                        punctTemp.push(splitString[i][c]);
                    };
                    splitString[i] = punctTemp.join("");
                } else {
                    splitString[i] = splitString[i] + "err";
                }
            }
        }
        punctuation = false;
    }
    console.log(splitString);
    console.log(splitString.join(" "));
    return splitString.join(" ");
}

errBob("ZjR WOH Gyz ");
