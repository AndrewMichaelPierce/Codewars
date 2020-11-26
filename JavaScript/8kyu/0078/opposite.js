
function isOpposite(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    if (s1.length === 0 || s1.length > s2.length || s2.length > s1.length) {
        return false;
    }
    for (let i = 0, len = s1.length; i < len; i++) {
        if (s1[i] !== s2[i] && s1[i].toLowerCase() === s2[i].toLowerCase()) {
            continue;
        } else {
            return false;
        }
    }
    return true;

}

/*
Status: Solved
*/