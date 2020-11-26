
function removeChar(str){
    str = str.split("");
    str.pop();
    str.shift();
    str = str.join("");
    return str;
}
