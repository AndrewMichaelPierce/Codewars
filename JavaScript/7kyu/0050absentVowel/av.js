
function absentVowel(string) {
    string = string.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let result = [0, 0, 0, 0, 0];
    for (let i = 0, len = string.length; i < len; i++) {
        for (let x = 0; x < 5; x++) {
            if (string[i] == vowels[x]) {
                result[x] = 1;
            }
        }
    }
    for (let y = 0; y < 5; y++) {
        if (result[y] == 0) {
            console.log(y);
            return y;
        }
    }
}

absentVowel("aaaaaaaaiiiiiiiiiiiiooooooouuuuu");

/*
    No way to test.
*/