const benchmark = require('../index');

const slowCheck = (val) => {
  for (var i = 0; i < val; ++i);
};

const fastCheck = () => { return 2; };

benchmark.benchmark(slowCheck, 1e6);
benchmark.benchmark(fastCheck);

benchmark.show();
