const isRightTriangle = (a, b, c) => {
  if (a == b && b == c) {
    return false;
  }
  return a ** 2 + b ** 2 == c ** 2;
};

module.exports = isRightTriangle;
