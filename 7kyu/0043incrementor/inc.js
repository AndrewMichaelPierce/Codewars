
function incrementer(nums) { 
    let result = [];
    if (nums.length < 1) {
        return [];
    } else {
        for (let increment = 1; increment < nums.length + 1; increment++) {
            if (increment + nums[increment - 1] >= 10) {
                let tempValue = increment + nums[increment - 1];
                for (let ten = 10; ten <= tempValue;) {
                    tempValue -= ten;
                }
                result.push(tempValue);
            } else {
                result.push(increment + nums[increment - 1]);
            }
        }
        return result;
    }
}

/*
Status: Solved
*/