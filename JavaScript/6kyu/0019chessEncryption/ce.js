
function chessEncryption(msg) {

    let encrypt = true;

    let board = {

        human: [
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200, "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", 200,
            200, "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", 200,
            200, "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", 200,
            200, "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", 200,
            200, "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", 200,
            200, "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", 200,
            200, "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", 200,
            200, "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", " ",
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200,
            200,  200,  200,  200,  200,  200,  200,  200,  200, 200
        ],

        secretCode: [
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200,    ,    ,    ,    ,    ,    ,    ,    , 200,
            200,    ,    ,    , 'e', 'f',    ,    ,    , 200,
            200,    ,    ,    , 'd', 'g',    ,    ,    , 200,
            200,    ,    ,    , 'c', 'h',    ,    ,    , 200,
            200,    ,    ,    , 'b', 'i',    ,    ,    , 200,
            200,    ,    ,    , 'a', 'j',    ,    ,    , 200,
            200, 'w', 'x', 'y', 'z', 'k', 'l', 'm', 'n', 200,
            200, 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', " ",
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200
        ]
    }

    let result = "";

    if (encrypt == false) {
        let alpha = -1;
        let numb = 0;

        while (numb < msg.length - 1) {
            alpha++;
            numb++;
            let algebraicNotation = '';
            algebraicNotation = msg[alpha] + msg[numb];
            for (let i = 0; i < 119; i++) {
                if (msg[alpha - 1] == " " && algebraicNotation == board.human[i]) {
                    result += " " + board.secretCode[i];
                } else if (algebraicNotation == board.human[i]) {
                    result += board.secretCode[i];
                }
            }
        }
    } else {
        let messageIncrement = 0;
        while (messageIncrement < msg.length) {
            for (let i = 0; i < 119; i++) {
                if (msg[messageIncrement] == board.secretCode[i]) {
                    result += board.human[i];
                }
            }
            messageIncrement++;
        }
    }

    return result;

}

chessEncryption("go ahead");

/*
Status: Solved
*/