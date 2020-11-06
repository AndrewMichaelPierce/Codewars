
function getScore(arr) {
    scoreArray = [0, 40, 100, 300, 1200];
    incrementArray = [0, 40, 100, 300, 1200];
    function increaseScores (scoreArray) {
        for (let i = 0; i < 5; i++) {
            scoreArray[i] = scoreArray[i] + incrementArray[i];
        }
    }
    lineCount = 0;
    level = 0;
    total = 0;
    for (let x = 0, len = arr.length; x < len; x++) {
        lineCount = lineCount + arr[x];
        total = total + scoreArray[arr[x]];
        if (Math.floor(lineCount / 10) > level) {
            level = (Math.floor(lineCount / 10));
            increaseScores(scoreArray);
        }
    }
    return total;
}
console.log(getScore([1, 3, 2, 1, 2, 0, 0, 1, 1, 4, 3, 2, 1, 0, 2, 2, 2, 1, 4, 0, 0, 4, 1, 3, 2, 2])); //15800

/*
Status: Complete
*/