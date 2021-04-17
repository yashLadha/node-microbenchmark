const benchmark = require('../index');

const or_with_zero = () => {
  for (var i = 0; i < 1e4; ++i) {
    const a = undefined | 0;
  }
};

const logical_or_with_zero = () => {
  for (var i = 0; i < 1e4; ++i) {
    const a = undefined || 0;
  }
};

const string_with_zero = () => {
  for (var i = 0; i < 1e4; ++i) {
    const a = '12' | 0;
  }
};

const negative_string_with_zero = () => {
  for (var i = 0; i < 1e4; ++i) {
    const a = '-12' | 0;
  }
};

const null_with_zero = () => {
  for (var i = 0; i < 1e4; ++i) {
    const a = null | 0;
  }
};

benchmark.benchmark(or_with_zero);
benchmark.benchmark(logical_or_with_zero);
benchmark.benchmark(string_with_zero);
benchmark.benchmark(negative_string_with_zero);
benchmark.benchmark(null_with_zero);

benchmark.show();
