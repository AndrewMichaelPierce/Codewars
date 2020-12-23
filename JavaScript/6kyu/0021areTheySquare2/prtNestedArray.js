function printNestedArray(arr) {
    if (Array.isArray(arr)) {
        for (let i = 0, len = arr.length; i < len; i++) {
            if (Array.isArray(arr[i])) {
                printNestedArray(arr[i]);
            } else {
                console.log(arr[i]);
            }
        }
    } else {
        console.log(arr);
    }
}

let arr = [1, [4], [9, 16, 25], [36, 49, [64, 81]], [100, [121, 144, [169]]], [196, [225, [256, 111, [324, [361, 400]]]]]];
printNestedArray(arr);