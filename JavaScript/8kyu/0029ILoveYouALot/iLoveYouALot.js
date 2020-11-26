
function howMuchILoveYou(nbPetals) {
    while (nbPetals > 6) {
        nbPetals = nbPetals - 6;
    }
    switch (nbPetals) {
        case 1: 
        return "I love you";
        case 2: 
        return "a little";
        case 3:
        return "a lot";
        case 4: 
        return "passionately";
        case 5:
        return "madly";
        case 6:
        return "not at all";
    }
}
