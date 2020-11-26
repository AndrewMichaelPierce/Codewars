
function oddOnesOut(nums) {
    let odds = [];
    for (let x = 0, len = nums.length; x < len; x++) {
        let counter = 0;
        for (let y = 0; y < len; y++) {
            if (nums[x] === nums[y]) {
                counter += 1;
            }
        }
        if (counter % 2 === 0 || counter < 1) {
            odds.push(nums[x]);
        }
        counter = 0;
    }
    return odds;
}

/*
Status: Solved
*/