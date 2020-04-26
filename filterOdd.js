const filterOdd = arr => {
  let out = [];
  arr.forEach(el => (el % 2 != 0 ? out.push(el) : {}));
  return out;
};

module.exports = filterOdd;
