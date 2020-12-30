function buildRowText(index, character) {
  let result = "|"
  for (let divider = 1, column = 0; divider < 10; divider++, column++) {
    if (column === index) {
      result = result + character;
    } else {
      result = result + " ";
    }
    result = result + "|";
  }
  console.log(result);
  return result;
}

buildRowText(2, "A");

// Status: Solved