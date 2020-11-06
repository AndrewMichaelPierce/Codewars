
function inviteMoreWomen(L) {
    let guestTotal = 0;
    for (let i = 0, len = L.length; i < len; i++) {
        guestTotal += L[i];
    }
    return guestTotal === 0 || guestTotal < 0 ? false : true;
}

/*

Status: Solved
*/