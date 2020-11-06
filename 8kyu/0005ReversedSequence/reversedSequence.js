
const reverseSeq = n => {
    let seq = [];
    let count = n;
    seq.push(n);
    for (let i = 1; i < count; i++) {
        let countdownN = n - i;
        seq.push(countdownN);
    }
    return seq;
};
reverseSeq();
