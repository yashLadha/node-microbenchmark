const benchmark = require('../index');

const slowCheck = () => {
  for (var i = 0; i < 1e4; ++i);
};

const fastCheck = () => { return 2; };

benchmark.benchmark(slowCheck);
benchmark.benchmark(fastCheck);

benchmark.show();
