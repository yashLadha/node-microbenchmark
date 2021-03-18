const benchmark = require('../index');

const regEx = /--(.+?)=(.+?)$/;
const str = '--checking=host-args';

const regTest = () => {
  for (var i = 0; i < 100; ++i) {
      if (regEx.test(str)) {
      }
  }
};

const regMatch = () => {
  for (var i = 0; i < 100; ++i) {
      if (str.match(regEx)) {
      }
  }
};

benchmark.benchMark(regTest);
benchmark.benchMark(regMatch);

benchmark.show();
