
let word = "test";
function capitalizeWord(word) {
    word = word.split("");
    let x = word[0].toUpperCase();
    word.shift(0);
    word.unshift(x);
    return word.join("");
}
capitalizeWord(word);
