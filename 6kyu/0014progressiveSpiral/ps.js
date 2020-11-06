
function distance(n) {
    let i = 1;
    while (n <= i * i) {
        i += 2;
    }
    i = i - 2;
    let steps = Math.floor(i / 2);
    if (n > i * i - 8) {
        if (n > i * i - 8 && n < i * i - Math.ceil(i / 2)) {
            steps = (i * i - 8) - (steps + Math.ceil(i / 2));
        } else if (n > )
    } else if (n > i * (i - 2) + 2) {

    } else if (n > i * (i - 2) - 6) {

    } else {

    }
    return 1;
}

/*
Status:
*/