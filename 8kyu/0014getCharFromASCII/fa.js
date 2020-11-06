
const getChar = (c) => console.log(String.fromCharCode(c));

/*
Favorite Solution(s):

const getChar = String.fromCharCode;
*/

function binaryString(code) {
    code = code.split(" ");
    let decimal = [];
    let alpha = [];
    for (let i = 0, len = code.length; i < len; i++) {
        let binary = '0b' + code[i];
        decimal.push(binary);
    }
    for (let x = 0, len2 = decimal.length; x < len2; x++) {
        alpha.push(String.fromCharCode(decimal[x]));
    }
    console.log(alpha.join(""));
}
binaryString("01110011 01101001 01101100 01100101 01101110 01100011 01100101 01101001 01110011 01100111 01101111 01101100 01100100 01100101 01101110");
