
function pointsNumber(radius){
        let upperArray = [];
        let lowerArray = [];
        for (let i = 1; i <= radius * 2 - 1; i++) {
            upperArray.push(i);
        }
        for (let i = 1; i < radius * 2 - 1; i++) {
            lowerArray.push(i);
        }
        const add = (a, b) => a + b;
        const upper = upperArray.reduce(add);
        const lower = lowerArray.reduce(add);
        return upper + lower;
}

/*
Status: Unsolved
*/