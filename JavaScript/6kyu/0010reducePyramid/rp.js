
function reducePyramid(base) {
	let result = 0;
	function baseCalc(base) {
		for (let i = 0, len = base.length; i < len; i++) {
			base[i] = parseInt(base[i], 10);
			if (base.length = 1) {
				result += base[i];
			} else if (i === base.length - 2) {
				result += base[i + 1] + base[i];
			} else {
				result += base[i + 1] + base[i];
			}
		}
	}
}
reducePyramid([5n, 6n, 7n, 8n]);
/*
Status:
*/

function reducePyramid(base) {
	if (base.length === 1) {
		return base[0];
	}
	let sums = base;
	let tempSums = [];
	function baseCalc(sums) {
		for (let i = 0, len = sums.length; i < len; i++) {
			sums[i] = parseInt(sums[i], 10);
			sums[i + 1] = parseInt(sums[i + 1], 10);
			if (sums.length = 1) {
				return sums[0] + "n";
			} else if (i === sums.length - 2) {
				tempSums.push(sums[i + 1] + sums[i]);
				i++;
			} else {
				tempSums.push(sums[i + 1] + sums[i]);
				i++;
			}
		}
		sums = tempSums;
		tempSums = [];
		baseCalc(sums);
	}
	baseCalc(sums);
	return sums[0] + "n";
}

// Tests again