
const keypad = {
    blank:     [100, 100, 100, 100,
                100,   5,   6,   7,
                100,   9,  10,  11,
                100,  13,  14,  15,
                100, 100,  18, 100,
                100, 100, 100],

    numeric:   [100, 100, 100, 100,
                100, "1", "2", "3",
                100, "4", "5", "6",
                100, "7", "8", "9",
                100, 100, "0", 100,
                100, 100, 100]
    }

let keyCrack = {
    convertedKey: [],
    convertNumber: function(originalNumber) {

    },
    splitNumber: function(observed) {
        observed = observed.toString();
        keyCrack.convertedKey = observed.split("");
        for (let i = 0, len = keyCrack.convertedKey.length; i < len; i++) {
            convertedKey[i] = convertedKey[i] + addEventListener;
        }
        console.log(keyCrack.convertedKey);
        
    },
    keyPossibilities: function() {

    }
}

function getPINs(observed) {
    keyCrack.splitNumber(observed);
}


getPINs(321);