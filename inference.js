const sorter = (first, second) => {
  if (first.ns < second.ns)
    return -1;
  return 1;
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
