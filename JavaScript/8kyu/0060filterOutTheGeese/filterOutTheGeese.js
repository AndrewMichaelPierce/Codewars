
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = [];
    for (let i = 0, len = birds.length; i < len; i++) {
        if (geese.indexOf(birds[i]) < 0) {
            result.push(birds[i]);
        }
    }
    return result;
};
