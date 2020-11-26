
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    let amax = 0, amin = 0, bmax = 0, bmin = 0;
    for (let i = 0, len = a1.length; i < len; i++) {
        if (a1[i].length > amax) {
            amax = a1[i].length;
        }
        if (amin === 0 || a1[i].length < amin) {
            amin = a1[i].length;
        }
    }
    for (let i = 0, len = a2.length; i < len; i++) {
        if (a2[i].length > bmax) {
            bmax = a2[i].length;
        }
        if (bmin === 0 || a2[i].length < bmin) {
            bmin = a2[i].length;
        }
    }
    let resulta = amax - bmin;
    let resultb = bmax - amin;
    if (resulta > resultb) {
        return resulta;
    } else {
        return resultb;
    }
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(s1, s2);
