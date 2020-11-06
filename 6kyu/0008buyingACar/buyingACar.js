
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let savings = 0;
    let loss = percentLossByMonth;
    if (startPriceOld >= startPriceNew) {
        return [0, startPriceOld - startPriceNew];
    } else {
        while (savings + startPriceOld < startPriceNew) {
            if (savings % (savingperMonth * 2) !== 0) {
                loss += .5;
            }
            startPriceNew -= startPriceNew * loss * .01;
            startPriceOld -= startPriceOld * loss * .01;
            savings += savingperMonth;

        }
        return [savings / savingperMonth, Math.round(startPriceOld + savings - startPriceNew)];
    }
}
nbMonths(2000, 8000, 1000, 1.5) //, [6, 766])

/*
Status: Solved
*/