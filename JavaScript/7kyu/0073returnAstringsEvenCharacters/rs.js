function evenChars(string) {
  if (string.length > 100 || string.length < 2) {
    return "invalid string";
  } else {
    let result = [];
    for (let i = 1, len = string.length; i < len; i += 2) {
      result.push(string[i]);
    }
    return result;
  }
}

// Status: Solved