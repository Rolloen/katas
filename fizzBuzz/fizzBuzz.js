'use strict';

export var fizzBuzz = (num) => {
  if (num % 3 === 0) {
    console.log('fizz');
    return 'fizz';
  }
  if (num % 5 === 0) {
    console.log('buzz');
    return 'buzz';
  }
  return num;
}