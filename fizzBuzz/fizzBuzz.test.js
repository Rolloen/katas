'use strict';

import { fizzBuzz } from "./fizzBuzz.js";
import assert from 'assert';


describe('FizzBuzz', () => {
  it('Should return 1 if num equals 1', () => {
    //Given num is 1
    let num = 1;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 1);
  });

  it('Should return 99 if num equals 99', () => {
    //Given num is 1
    let num = 99;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 99);
  });
  
});
