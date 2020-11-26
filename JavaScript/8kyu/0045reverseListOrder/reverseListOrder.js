
function reverseList2(list) {
    let result = [];
    for (let i = list.length - 1; i >= 0; i--) {
        result.push(list[i]);
    }
    return result;
}

function reverseList(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.unshift(list[i]);
    }
    return result;
}

let list = [1, 2, 3, 4, 5];
reverseList(list);
