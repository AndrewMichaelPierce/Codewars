
function generateShape(int) {
    let result = "initiate";
    if (int == 0) {
      return "";
    }
    for (let i = 0; i < int; i++) {
      for (let x = 0; x < int; x++) {
        if (result === "initiate") {
          result = "+";
        } else {
          result = result + "+";
        }
       }
       if (i === (int - 1)) {
         return result;
       }
       result = result + "\n";
    }
  }
