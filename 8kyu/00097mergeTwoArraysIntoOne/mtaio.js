
function mergeArrays(arr1, arr2) {
    for (let i = 0, len = arr1.length; i < len; i++) {
        arr2.push(arr1[i]);
    }
    let bothArrays = [...new Set(arr2)];
    return bothArrays.sort(function (a, b) { return a - b });
}

/*
Status: Solved
*/