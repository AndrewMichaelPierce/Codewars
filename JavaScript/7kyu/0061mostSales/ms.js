
function top3(products, amounts, prices) {
    let result = "";
    let resultTotal = 0;
    for (let i = 0, len = products.length; i < len; i++) {
        if (amounts[i] * prices[i] > resultTotal) {
            result = products[i];
            resultTotal = amounts[i] * prices[i];
        }
    }
    return result;
}

function top3(products, amounts, prices) {
    let result = [];
    let winners = [];
    for (let i = 0, len = products.length; i < len; i++) {
        if (winners.length < 4 || winners.find(element => element < amounts[i] * prices[i]) == true) {
            winners.shift();unshift(amounts[i] * prices[i]);
        }
    }
    for (let x = 0; x < 3; x++) {
        result.push(products[x]);
    }
    return result;
}
