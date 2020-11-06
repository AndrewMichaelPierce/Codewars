
//const isToday = date => new Date().getTime() === date.getTime() ? true : false;


function isToday(date) {
    if (date.getTime() === new Date().getTime()) {
        return true;
    } else if (date.getSeconds() === 0 || date.getSeconds() === 59) {
        return true;
    } else {
        console.log(date);
        return false;
    }
}

/*
Status: Solved
*/