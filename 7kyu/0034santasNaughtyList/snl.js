
function findChildren(santasList, children) {
    let goodList = [];
    for (let i = 0, len = santasList.length; i < len; i++) {
            for (let k = 0, len2 = children.length; k < len2; k++) {
                if (santasList[i] === children[k]) {
                    goodList.push(santasList[i]);
                }
        }
    }
    const aList = goodList;
    const bList = new Set(aList);
    const cList = [...bList];
    return cList.sort();
}

/*
Status: Solved
*/