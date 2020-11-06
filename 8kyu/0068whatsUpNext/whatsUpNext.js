
function nextItem(xs, item) {
    for (let i = 0, len = xs.length; i < len; i++) {
        if (xs[i] === item) {
            if (xs[i + 1] === undefined) {
              let y = 0;
              for (let x = 0; ; x++) {
                if (item === xs) {
                  return item;
                } else {
                  y = item;
                }
              }
            } else {
              return xs[i + 1];
            }
        }
    }
}
nextItem([543], 4);
let nex = nextItem();
if (typeof nex === "function") {
    console.log("Hi");
}

/*
Status:
*/