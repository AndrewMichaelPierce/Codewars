
String.prototype.toJadenCase = function () {
    let jaden = this.split("");
    let i = 0;
    let finalJ = "";
    let newJ = [];
    for (a = jaden.length; i < a; ++i) {
        if (i === 0) {
        newJ = jaden[i];
        finalJ += newJ.toUpperCase();
        newJ = [];
    } else if (jaden[i] === " ") {
        finalJ += " ";
        ++i;
        newJ = jaden[i];
        finalJ += newJ.toUpperCase();
        newJ = [];
    } else {
        newJ = jaden[i];
        finalJ += newJ;
        newJ = [];
    }
    }
    return finalJ;
}

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
