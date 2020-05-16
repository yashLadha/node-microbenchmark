const benchmark = require('../index');

const slowTimer = () => new Promise(res => setTimeout(res, 200));
const fastTimer = () => new Promise(res => setTimeout(res, 50));

const fn = async () => {
  await benchmark.benchMarkPromise(slowTimer);
  await benchmark.benchMarkPromise(fastTimer);
  benchmark.show();
};

fn();
