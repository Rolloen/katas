
console.log('Hello World');

function encode (text) {
  
  let listChar = text.split('').sort();
  let lastChar = listChar[0];
  let result = '';
  let count = 0;
  console.log(listChar);
  for (i = 0; i <= listChar.length; i++) {
    if (listChar[i] === lastChar) {
      lastChar = listChar[i];
      count++;
    } else {
      result += lastChar + count;
      count = 1;
      lastChar = listChar[i];
    }

  }

  console.log(result);
}


encode('');