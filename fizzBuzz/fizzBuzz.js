'use strict';

export var fizzBuzz = (num) => {
  let str = '';
  if (num % 3 === 0) {
    str += 'fizz';
  }
  if (num % 5 === 0) {
    str += 'buzz';
  }
  return str ? str : num;
}