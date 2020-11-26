
function add(decimalX, decimalY) {
    let conversionTool = {
        binaryX: 0,
        binaryY: 0,
        decToBin: function (decimalInput, binaryOutput) {
            decimalToBinaryArray = [];
            for (let i = 2; decimalInput > 0; decimalInput = Math.floor(decimalInput / i)) {
                if (decimalInput % 2 === 0) {
                    decimalToBinaryArray.unshift(0);
                } else {
                    decimalToBinaryArray.unshift(1);
                }
            }
            conversionTool[binaryOutput] = decimalToBinaryArray.join("");
        }
    }
    mathTool = {
        const: xor = (x, y) => (x === 1 && y === 0) || (x === 0 && y === 1) ? 1 : 0,
        halfAdder: function (x, y) {
            xor (x, y);
            
        },
        addition: function (input1, input2) {

        }
    }
    conversionTool.decToBin(decimalX, "binaryX");
    conversionTool.decToBin(decimalY, "binaryY");
    console.log(conversionTool.binaryX + " " + conversionTool.binaryY);
    
}
add (100, 217);

/*
Status:
*/