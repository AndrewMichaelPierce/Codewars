function firstNonConsecutive(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[len - 1] == arr[i] + 1) {
            return null;
        }
        if (arr[i] + 1 != arr[i + 1]) {
            return arr[i + 1];
        }
    }
}

/*
Status: Solved
*/