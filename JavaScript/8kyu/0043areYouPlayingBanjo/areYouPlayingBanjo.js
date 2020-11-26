
function areYouPlayingBanjo(name) {
    name = name.split("");
    if (name[0] === "r" || name[0] === "R") {
        return name.join("") + " plays banjo";
    } else {
        return name.join("") + " does not play banjo";
    }
}
