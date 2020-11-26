
/*
function overTheRoad(address, n){
    let location = (n * 2 - (((address + 1) / 2) - 1) * 2);
    console.log(location);
}
*/

const overTheRoad = (a, b) => b * 2 - (((a + 1) / 2) - 1) * 2;

overTheRoad(11, 8);
