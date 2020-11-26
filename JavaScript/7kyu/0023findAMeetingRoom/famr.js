
function meeting(x) {
    for (let i = 0, len = x.length; i < len; i++) {
        if (x[i] === "O") {
            return i;
        }
    }
    return "None available!";
}

/*
Status:
*/