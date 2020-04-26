const fibonacciNums = n => {
  fibs = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1];
  }
  return fibs.slice(0, n);
};

module.exports = fibonacciNums;
