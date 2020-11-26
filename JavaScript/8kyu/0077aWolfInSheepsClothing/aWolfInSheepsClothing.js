
function warnTheSheep(queue) {
    for (let i = 0, len = queue.length; i < len; i++) {
        if (queue[i] === "wolf" && i + 1 < queue.length) {
            return "Oi! Sheep number " + (queue.length - i - 1) + "! You are about to be eaten by a wolf!";
        } else if (queue[i] === "wolf" && i + 1 === queue.length) {
            return "Pls go away and stop eating my sheep";
        }
    }
}

/*
Status: Solved
*/