module.exports = function getZerosCount(number, base) {
  // your implementation
  for (var i = 2; i < base; i++) {
	  if (base%i == 0) {
	  	base = 5;
      }
  }
  var res = 0;
  while(number > 0) {
  number = Math.floor(number/base);
  res += number;
  }
  return res;
}
