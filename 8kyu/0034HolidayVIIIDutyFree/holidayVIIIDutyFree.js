
function dutyFree(normPrice, discount, hol){
    discount /= Math.pow(10, 2);
    let inc = normPrice * discount;
    let sum = 0;
    sum = hol / inc;
    return Math.floor(sum);
}
