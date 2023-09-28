'use strict';

import assert from 'assert';
import {getWardrobeCombination} from './wardrobe.js';

describe('wardrobe', function () {
	describe('Step 1', function () {
		//test 1
		it('Should return [50] if size equals 50', function () {
			//Given 
			let size = 50;
			//When 
			let result = getWardrobeCombination(size);
			//Then
			assert.deepEqual(result, [50]);
		});
		//test 2
		it('Should return an array of integer [50,75] if size equals 125', function () {
			//Given 
			let size = 125;
			//When 
			let result = getWardrobeCombination(size);
			//Then
			assert.deepEqual(result, [50, 75]);
		});
	});
});