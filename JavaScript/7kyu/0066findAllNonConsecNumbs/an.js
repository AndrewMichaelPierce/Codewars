
function firstNonConsecutive(arr) {
    let result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[len - 1] == arr[i] + 1) {
            return [];
        }
        if (arr[i] + 1 != arr[i + 1]) {
            result.push[{"i: " : i + ", n:" + i + 1}];
        }
    }
    return result;
}
