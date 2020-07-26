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

benchmark.benchMark(or_with_zero);
benchmark.benchMark(logical_or_with_zero);
benchmark.benchMark(string_with_zero);
benchmark.benchMark(negative_string_with_zero);
benchmark.benchMark(null_with_zero);

benchmark.show();
