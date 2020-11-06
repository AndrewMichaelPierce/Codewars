
function isDivisible(wallLength, pixelSize){
    if (wallLength % pixelSize === 0) {
        return true;
    } else {
        return false;
    }
  }
const isDivisible = (wallLength, pixelSize) => (wallLength % pixelSize === 0) ? true : false;
