function multiply(a, b, c) {
  return a * b * c;
}

function curryMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const double = curryMultiply(2)(1);
const triple = curryMultiply(3)(1);

console.log(double(6)); //12
console.log(triple(5)); //15
