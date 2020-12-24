

let percent = [];
function isPrime(num, end) {
    let largestDivisor = 1;
    let halfNum = Math.ceil(num / 2);
    for (let i = 2; i < halfNum; i++) {
          if (num % i === 0) {
              largestDivisor = i;
          }
          if (i === halfNum - 1 && largestDivisor > 1 && !(num % 2 === 0) && !(largestDivisor / num === .3333333333333333) &&
              !((largestDivisor / num) % .2 === 0) && !(largestDivisor / num === .09090909090909091) &&
              !(largestDivisor / num === .07692307692307693) && !(largestDivisor / num === .14285714285714285) &&
              !(largestDivisor / num === .058823529411764705) && !(largestDivisor / num === .04347826086956216) &&
              !(largestDivisor / num === .02127659574468085)) {
              let newPercent = largestDivisor / num;
              if (percent.includes(newPercent) === false) {
                 percent.push(newPercent);
              }
              console.log(num + " " + largestDivisor + " " + newPercent);
          }
    }
    num++;
    if (num <= end) {
        isPrime(num, end);
    }
}


isPrime(5000, 10000);
console.log(percent);
