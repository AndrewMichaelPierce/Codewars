let isSquare = function(arr) {
    function printNestedArray(arr) {
        if (Array.isArray(arr)) {
            for (let i = 0, len = arr.length; i < len; i++) {
                if (Array.isArray(arr[i])) {
                    if (printNestedArray(arr[i]) === false) {
                      return false;
                    }
                } else {
                    if (isSquare(arr[i]) === false) {
                        return false;
                    }
                }
            }
        } else {
            if (isSquare(arr) === false) {
                return false;
            }
        }
    }
    function isSquare(input) {
        if (input === 1 || input === 0) {
        } else {
            let halfInput = input / 2;
            for (let i = 1; i <= halfInput; i++) {
                if (i * i === input) {
                    return true;
                }
            }
            return false;
        }
    }
    if (arr.length === 0) {
        return undefined;
    } else {
        return printNestedArray(arr) !== false;
    }
}

// Status: Solved