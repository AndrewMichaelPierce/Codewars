
function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    for (let i = 2; i < num; i++) {
          if (num % i === 0) {
              return false;
          } else if (i === num - 1) {
              return true;
          }
      }
}
