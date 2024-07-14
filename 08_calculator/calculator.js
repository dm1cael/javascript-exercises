const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  return array.reduce((total, item) => total + item, 0);
};

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	if(a == 0) return 1;
  let factorial = 1;

  for(let i = a; i >= 2; i--) {
    factorial *= i;
  }

  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
