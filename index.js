const chalk = require('chalk');
const chalkTable = require('chalk-table');
const { determineInference } = require('./inference');

const getNano = (ar) => ar[0] * 1e9 + ar[1];

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

let accumulator = [];
const iterations = Date.now() % 1000;

function benchMark(func) {
  const args = [];
  for (var it = 1; it < arguments.length; ++it)
    args.push(arguments[it]);
  for(var idx = 0; idx < iterations; ++idx) {
    const result = runner(func, args);
    accumulator.push(result);
  }
}

const calculate = () => {
  const functions = new Set(accumulator.map(el => el.name));
  const functionTotalTime = {};
  for (let name of functions) {
    functionTotalTime[name] = {
      sum: 0,
    };
  }

  for (let timeBench of accumulator) {
    functionTotalTime[timeBench.name].sum += getSum(timeBench);
  }

  for (let name of functions) {
    functionTotalTime[name].average = functionTotalTime[name].sum / iterations;
  }

  return functionTotalTime;
};

const getSum = (timeBenchData) => {
  return timeBenchData.ending - timeBenchData.init;
};

const show = () => {
  const results = calculate();
  const represent = Object.keys(results)
    .map(key => ({
      name: key,
      ns: results[key].average,
      ms: results[key].average / 1e6
    }));
  determineInference(represent);
  const options = {
     leftPad: 2,
    columns: [
      { field: 'name', name: chalk.green('Name') },
      { field: 'ns', name: chalk.yellow('nano seconds') },
      { field: 'ms', name: chalk.blue('milli seconds') },
      { field: 'slowerBy', name: chalk.red('Slower by') },
    ]
  };
  console.log(`${chalk.cyan('Iterations')}: ${iterations}`);
  console.log(chalkTable(options, represent));
};

module.exports = {
  benchMark,
  show,
};
