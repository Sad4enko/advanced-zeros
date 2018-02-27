module.exports = function getZerosCount(number, base) {
  // your implementation
  var res = 0;
  while(number > 0) {
  number = Math.floor(number/base);
  res += number;
  }
  return res;
}
