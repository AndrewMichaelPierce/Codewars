
function findShort(s){
    let result = [];
    s = s.split(" ");
    for (let i = 0, len = s.length; i < len; i++) {
        if (result.length === 0 || s[i].length < result[0].length) {
            for (let x = 0, len2 = result.length; x < len2; x ++) {
                result.pop();
            }
            result.push(s[i]);
        } else if (s[i].length === result[0].length) { 
            result.push(s[i]);
        }
    }
    return result[0].length;
}

/*
Status: Solved
*/