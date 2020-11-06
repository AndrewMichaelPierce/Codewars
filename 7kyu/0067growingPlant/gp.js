
function growingPlant(upSpeed, downSpeed, desiredHeight) {
    for (let plantHeight = 0, i = 1; plantHeight < desiredHeight; i++) {
        if (plantHeight < desiredHeight) {
            plantHeight += upSpeed;
            if (plantHeight < desiredHeight) {
                plantHeight -= downSpeed;
            }
        }
        if (plantHeight >= desiredHeight) {
            return i;
        }
    }
}

growingPlant(100, 10, 910);

/*
Status: Solved
*/