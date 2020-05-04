const sorter = (first, second) => {
  return first.ns - second.ns;
};

const determineInference = results => {
  results.sort(sorter);
  const [ fastest ] = results;
  fastest.slowerBy = 'fastest';
  if (typeof fastest !== undefined) {
    for (var index = 1; index < results.length; ++index) {
      results[index].slowerBy = `${parseInt(results[index].ns / fastest.ns, 10)}x`;
    }
  }
};

module.exports = {
  determineInference,
};
