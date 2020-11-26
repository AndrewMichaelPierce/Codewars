
function vertMirror(strng) {
    let result = '';
    let interval = [];
    let temp = [...strng];
    for (let i = 0, x = 0, len = temp.length; i < len; i++) {
        if (temp[i] == "\n") {
            interval[x] = i;
            x++;
        }
    }
    for (let i = 0, x = 0, len = interval.length; i < len; i++) {
        result += strng.substring(interval[i], interval[i + 1]).split("").reverse().join("");
        
    }

    console.log(result);
    /*
    console.log(interval);
    
    console.log(strng);
    console.log(strng.substring(6,7));
    let newlineSearch = /\n/;
    let found = strng.substring(7).search(newlineSearch);
    s = strng.substring(6);
    console.log(found);
    */
}
function horMirror(strng) {
    // Your code
}
function oper(fct, s) {
    // Your code
}

vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu");
