function noBoringZeros(n) {
    let result = n.toString().split("");
    it: for (let i = result.length - 1; i > 0; i--) {
        if (result[i] === '0') {
            result.pop();
        } else {
            break it;
        }
    }
    return Number(result.join(""));
}

noBoringZeros(1450);

/*
  Status: Solved
*/