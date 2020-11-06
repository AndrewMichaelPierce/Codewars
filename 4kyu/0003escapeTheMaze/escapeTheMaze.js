
function escape(maze) {
    let puzzle = {
        findExits: function (maze) {
            let len = maze.length;
            let edges = [];
            
            for (let i = 0; i < len; i++) {
                if (i === 0 || i === len - 1) {
                    edges.push(maze[0].split(""));
                } else {
                    let temp = [];
                    temp.push(maze[i].split(""));
                    edges.push(temp[0].pop());
                    edges.push(temp[0][0]);
                }
            }
            for (let x = 0, edgeLen = edges.length; x < edgeLen; x++) {
                if (x === 0 || x === x.length - 1) {
                    for (let n = 0, subLen = edges[x].length; n < subLen; n++) {
                        if (edges[x][n] !== "#") {
                            puzzle.exits.push(edges[x][n]);
                        }
                    }
                } else if (x % 2 !== 0 && edges[x] !== "#") {
                    puzzle.exits.push(edges[x].length - 1);
                } else if (edges[x] !== "x") {
                    puzzle.exits.push(edges[x]);
                }
            }
        },
        exits: [],
        
        result: function () {

        },
        path: [],
        wall: "#",
        traveled: "X",
        fork: "F"

    }
    let arrow = {
        find: function () {

        },
        location: [],
        look: function () {

        },
        move: function () {

        },
        atExit: function () {

        }
    }
    puzzle.findExits(maze);
    console.log(puzzle.exits);
    console.log(maze);
    return [];
}

escape([
    '##########',
    '#>       #',
    '######## #'
  ]);
/*
Status:


find exits // placeholder "puzzle.findExits"
locate character // placeholder "arrow.find"
place character in memory // placeholder "arrow.location"
move function =
check for solution // placeholder "arrow.atExit"
discover surroundings // placeholder "arrow.look"
    check for path // placeholder "puzzle.path"
    check for already walked // placeholder "puzzle.traveled"
    check for walls // placeholder "puzzle.wall"
    mark multiple paths // placeholder "puzzle.fork"
choose path
leave breadcrumb // placeholder "puzzle.traveled"
record path // placeholder "puzzle.path"
move character //placeholder "arrow.move"
if blocked
    return to last choice
    place character on next choice

*/