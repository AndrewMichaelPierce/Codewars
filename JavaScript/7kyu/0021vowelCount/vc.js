
function getCount(str) {
    let vowelsCount = 0;
    str = str.split("");
    for (let xx = 0, len = str.length; xx < len; xx++) {
        str[xx] = str[xx].toLowerCase();
    }
    console.log(str);
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0, len = vowels.length; i < len; i++) {
        for (let n = 0, len2 = str.length; n < len2; n++) {
            if (vowels[i] === str[n]) {
                vowelsCount += 1;
            }
        }
    }
    console.log(vowelsCount);
    return vowelsCount;
}

getCount("Hello Aaron!");

/*
Status: Solved
*/