module.exports = function getZerosCount(number, base) {
  // your implementation
  if ( base = 10 || base = 9 ) {
    base = 5;
  }
  var res = 0;
  while(number > 0) {
  number = Math.floor(number/base);
  res += number;
  }
  return res;
}
