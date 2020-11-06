
function sumOfABeach(beach) {
    let result = 0;
    beach = beach.toLowerCase();
    let elements = ["sand", "water", "fish", "sun"];
    for (let i = 0; i < 4; i++) {
        while (beach.includes(elements[i])) {
            beach = beach.replace(elements[i], '');
            result++;
        }
    }
    return result;
}

/*
Status: Solved
*/