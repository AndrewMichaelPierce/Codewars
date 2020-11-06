
function abbrevName(name) {
    name = name.toUpperCase().split(" ");
    let results = [];
    for (let i = 0; i < 2; i++) {
        let initial = name[i].split("");
        results.push(initial[0]);
    }
    return results.join(".");
}
