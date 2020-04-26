const getFrequencies = arr => {
  freqs = {};
  arr.forEach(el =>
    typeof freqs[el] == "undefined" ? (freqs[el] = 1) : freqs[el]++
  );
  return freqs;
};

module.exports = getFrequencies;
