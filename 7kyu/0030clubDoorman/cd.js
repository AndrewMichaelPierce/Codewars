
function passTheDoorMan (word){
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 1, len = word.length; i < len; i++) {
        if (word[i] === word[i - 1]) {
            for (x = 0; x < 26; x++) {
                if (word[i] === alpha[x]) {
                    return (x + 1) * 3;
                }
            }
        }
    }
}

/*
Status: Solved
*/