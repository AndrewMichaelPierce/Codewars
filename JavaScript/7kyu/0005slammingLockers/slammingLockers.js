
function lockerRun(lockers){
    let x = [];
    console.log(lockers);
    for (let v = 0; v < lockers; v++) {
      x.push(0);
    }
    out : for (let i = 0; i < lockers + 1; i++) {
      for (let s = i; s < lockers + 1; s += i) {
          if ( s === 0 ) {
              if (x.length === 1) {
                x[s] = 1;
                break out;
              }
              x[s] = 0;
              s++;
              break;
          } else if (x[s - 1]) {
              x[s - 1] = 0;
          } else {
              x[s - 1] = 1;
          }
      }
    }
    let answer = [];
    for (let h = 0; h < x.length; h++) {
        if (x[h] === 1) {
            answer.push(h + 1);
        }
    }
    return answer;
}
