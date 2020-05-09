const benchmark = require('../index');

const slowCheck = (val) => {
  for (var i = 0; i < val; ++i);
};

const fastCheck = () => { return 2; };

benchmark.benchMark(slowCheck, 1e6);
benchmark.benchMark(fastCheck);

benchmark.show();
