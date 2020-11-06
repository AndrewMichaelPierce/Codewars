
function getSize(width, height, depth) {
    let area = (width * height * 2) + (width * depth * 2) + (height * depth * 2);
    let volume = width * height * depth;
    return [area, volume];
}

/*
Status: Solved
*/