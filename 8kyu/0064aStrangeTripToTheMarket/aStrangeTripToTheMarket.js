
function isLockNessMonster(s) {
    let tree = /tree fiddy/;
    let three = /three fifty/;
    let numThree = /3.50/;
    if (tree.test(s) || three.test(s) || numThree.test(s)) {
        return true;
    } else {
        return false;
    }
}

/*
Status: Solved
*/