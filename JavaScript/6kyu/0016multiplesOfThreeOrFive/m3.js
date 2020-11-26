
function solution(number){
  let result = 0;
  let boolSwitch = false;
  for (let i = 0; i < number; i++) {
      if (i % 3 == 0) {
        boolSwitch = true;
        result += i;
      } else if (i % 5 == 0 && boolSwitch == false) {
          result += i;
      }
      boolSwitch = false;
  }
  return result;
}

/*
Status: Solved
*/

/*
Second Attempt

function solution(number){
  let result = 0;
  for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        result += i;
      }
  }
  return result;
}

*/