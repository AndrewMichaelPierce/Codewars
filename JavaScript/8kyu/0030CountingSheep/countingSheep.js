
function countSheeps(arrayOfSheep) {
    let t = 0;
    for (let i = 0; i < arrayOfSheep.length; i++){
        if (arrayOfSheep[i] === true) {
            t++;
        }
    }
    return t;
}
