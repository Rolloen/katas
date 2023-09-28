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

  it('Should return 4 if num equals 4', () => {
    //Given num is 4
    let num = 4;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 4);
  });

  it('Should return fizz if num equals 3', () => {
    //Given num is 3
    let num = 3;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'fizz');
  });
  
  it('Should return fizz if num equals 6', () => {
    //Given num is 6
    let num = 6;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'fizz');
  });
  it('Should return fizz if num equals 999', () => {
    //Given num is 999
    let num = 999;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'fizz');
  });
  
  it('Should return buzz if num equals 5', () => {
    //Given num is 5
    let num = 5;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'buzz');
  });
  
  it('Should return buzz if num equals 10', () => {
    //Given num is 10
    let num = 10;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'buzz');
  });
  it('Should return buzz if num equals 550', () => {
    //Given num is 550
    let num = 550;
    //When 
    let result = fizzBuzz(num);
    //Then
    assert.equal(result, 'buzz');
  });
  
});
