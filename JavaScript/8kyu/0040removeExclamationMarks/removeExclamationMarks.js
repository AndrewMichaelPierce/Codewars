
let s = "!!!test!!!this!!!is!!!"
function removeExclamationMarks(s) {
    s = s.split("");
    let i = s.length;
    while (i--) {
        if (s[i] === "!") { 
            s.splice(i, 1);
        } 
    }
    s = s.join("");
    console.log(s);
    return s;
};
removeExclamationMarks(s);
