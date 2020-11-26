
function twoOldestAges(ages){
    let oldest = 0;
    let secondOldest = 0;
    for (let i = 0, len = ages.length; i < len; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }
    for (let i = 0, len = ages.length; i < len; i++) {
        if (ages[i] > secondOldest && ages[i] != oldest) {
            secondOldest = ages[i];
        }
    }
    console.log([secondOldest, oldest]);
    return [secondOldest, oldest];
}

twoOldestAges([5, 2, 9, 11, 4]);

/*
Status: Solved
*/