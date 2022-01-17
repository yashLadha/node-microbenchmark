const { runner, runnerPromise } = require('./runner');

let accumulator = [];
let iterations = Date.now() % 1000;

function setIterations(numIterations){
  iterations = numIterations;
}

function getIterations(){
  return iterations;
}

function captureArgs(args) {
  const _args = [];
  for (var it = 1; it < args.length; ++it)
    _args.push(args[it]);
  return _args;
}

function benchmark(func) {
  const args = captureArgs(arguments);
  for(var idx = 0; idx < iterations; ++idx) {
    const result = runner(func, args);
    accumulator.push(result);
  }
}

async function benchmarkPromise(func) {
  const args = captureArgs(arguments);
  for (var idx = 0; idx < iterations; ++idx) {
    const result = await runnerPromise(func, args);
    accumulator.push(result);
  }
}

module.exports = {
  getIterations,
  setIterations,
  benchmark,
  accumulator,
  iterations,
  benchmarkPromise
};
