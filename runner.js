const getNano = ar => ar[0] * 1e9 + ar[1];

const runner = (func, args) => {
  const init = getNano(process.hrtime());
  func.apply(null, args);
  const ending = getNano(process.hrtime());
  return {
    name: func.name,
    init,
    ending
  };
};

const runnerPromise = async (func, args) => {
  const init = getNano(process.hrtime());
  await func.apply(null, args);
  const ending = getNano(process.hrtime());
  return {
    name: func.name,
    init,
    ending
  };
};

module.exports = {
  runner,
  runnerPromise
};
