function lvl6exercise1 (num) {
  // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
  if (num == 1){return 'hello'} else if (num == 2){return 'world'} else{return 'bye'}
}

function lvl6exercise2 () {
  // Push 10 'hello' strings into the array using a for loop, then return it
  var arr = [];
  var x;
  for(x = 0; x < 10; x++) {arr.push('hello')}
  return arr;
}

function lvl6exercise3 () {
  // Empty this array using a while loop and return it
  var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'];
  var x = 0, y = arr.length;
  while (x < y){arr.pop(); x++};
  return arr;
}
