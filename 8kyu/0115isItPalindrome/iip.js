
function isPalindrome(x) {
    x = x.toLowerCase();
    for (let a = 0, b = x.length - 1; a < b; a++ , b--) {
        if (x[a] !== x[b]) {
            return false;
        }
    }
    return true;
}
isPalindrome("test");

/*
Status: Solved
*/