
function elevator(left, right, call){
    let x = Math.abs(call - left);
    let y = Math.abs(call - right);
    if (y <= x) {
      return "right";
    } else {
      return "left";
    }
}
