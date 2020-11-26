
function jumpingNumber (n) {
  n = n.toString().split("");
  for (let i = 0, len = n.length; i < len; i++) {
      n[i] = Number(n[i]);
  }
  for (let x = 0, len = n.length; x < len; x++) {
      if (len === 1) {
          return "Jumping!!";
      } else if (len === 2 && (n[1] - 1 === n[0] || n[1] + 1 === n[0])) {
          return "Jumping!!";
      } else if (len === 2 && (n[1] - 1 !== n[0] || n[1] + 1 !== n[0])) {
          return "Not!!";
      } else if (x === 0 && (n[x] + 1 === n[1] || n[x] - 1 === n[1])) {
          continue;
      } else if (x === len - 1) {
          return "Jumping!!";
      } else if ((n[x] - 1 === n[x - 1] || n[x] + 1 === n[x - 1]) && (n[x] + 1 === n[x + 1] || n[x] - 1 === n[x + 1])) {
          continue;
      } else {
          return "Not!!";
      }
  }
}

/*
Status: Solved
*/