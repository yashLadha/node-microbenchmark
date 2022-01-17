const chalk = require('chalk');
const chalkTable = require('chalk-table');
const { determineInference } = require('./inference');
const { benchmark, benchmarkPromise, accumulator, getIterations, setIterations } = require('./benchmarkers');

const calculate = () => {
  const iterations = getIterations();
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

const show = ({slowerByDecimalPlaces} = {slowerByDecimalPlaces: 0}) => {
  const results = calculate();
  const represent = Object.keys(results)
    .map(key => ({
      name: key,
      ns: results[key].average,
      ms: results[key].average / 1e6
    }));
  determineInference(represent, slowerByDecimalPlaces);
  const options = {
     leftPad: 2,
    columns: [
      { field: 'name', name: chalk.green('Name') },
      { field: 'ns', name: chalk.yellow('nano seconds') },
      { field: 'ms', name: chalk.blue('milli seconds') },
      { field: 'slowerBy', name: chalk.red('Slower by') },
    ]
  };
  console.log(`${chalk.cyan('Iterations')}: ${getIterations()}`);
  console.log(chalkTable(options, represent));
};

module.exports = {
  getIterations,
  setIterations,
  benchmark,
  benchmarkPromise,
  show,
};
