
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0, len = classPoints.length; i < len; i++) {
        sum += classPoints[i];
    }
    if (yourPoints > sum / classPoints.length) {
        return true;
    } else {
        return false;
    }
}

/*
Status: Solved
*/