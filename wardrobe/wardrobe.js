'use strict';
const kallaxModules = [50, 75, 100, 120];

export var getWardrobeCombination = (size) => {

	let remains = size;
	let res = [];
	for (const mod of kallaxModules) {
		if (remains - mod >= 0) {
			remains = size - mod;
			res.push(mod);
		} else {
			break;
		}
	}
	return res;
}