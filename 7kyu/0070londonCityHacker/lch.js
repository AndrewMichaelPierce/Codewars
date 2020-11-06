
function londonCityHacker(journey) {
    let cost = 0;
    if (journey.length == 0) {
        return "£0.00";
    }
    let consecutiveBusTrips = 0;
    for (let i = 0; i < journey.length; i++) {
        if (journey[i] % .01 || journey[i] == 0) {
            consecutiveBusTrips += 1;
            if (consecutiveBusTrips % 2 != 0) {
                cost += 1.5;
            }
        } else {
            cost += 2.4;
            consecutiveBusTrips = 0;
        }
    }
    return "£" + cost.toFixed(2);
}

/*
Status: Solved
*/