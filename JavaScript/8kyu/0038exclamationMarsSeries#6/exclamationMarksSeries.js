
function remove(s,n){
    s = s.split("");
    s.reverse();
    let x = 0; 
    let i = s.length;
    while (i--) {
        if (s[i] === "!" && x < n) { 
            s.splice(i, 1);
            x++;
        } 
    }
    s.reverse();
    s = s.join("");
    return s;
}
