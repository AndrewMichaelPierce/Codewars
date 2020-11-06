
function addLetters() {
  let sum = 0;
  if (arguments.length === 0) {
    return "z";
  }
  for (let i = 0, len = arguments.length; i < len; i++) {
    sum += arguments[i].charCodeAt(0) - 96;
  }
  function wrapAround() {
    if (sum > 26) {
      sum -= 26;
      if (sum > 26) {
        wrapAround(sum);
        }
    }
  }
  wrapAround(sum);
  return String.fromCharCode(sum + 96);
}
addLetters("a", "b", "c");

/*
Status: Solved
*/