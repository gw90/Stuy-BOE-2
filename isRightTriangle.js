const isRightTriangle = (a, b, c) => {
  if (a < 1 || b < 1 || c < 1) {
    return false;
  }
  const s = [a, b, c].sort();

  return s[0] ** 2 + s[1] ** 2 == s[2] ** 2;
};

module.exports = isRightTriangle;
