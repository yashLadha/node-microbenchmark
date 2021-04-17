## node-microbenchmark
<img src="https://img.icons8.com/color/48/000000/nodejs.png"/>

[![npm version](https://badge.fury.io/js/node-microbenchmark.svg)](https://badge.fury.io/js/node-microbenchmark)

A micro benchmarking library inspired from [google-benchmark](https://github.com/google/benchmark)

Features available:
* Benchmarking synchronous functions
* Benchmarking of asynchronous functions
    * Support for Promises
* High precision benchmark (upto nanoseconds precision)

### Benchmarking of synchronous functions
```javascript
const { benchmark, show } = require('node-microbenchmark');

const slowFn = () => {
    for (var i = 0; i < 1e4; ++i);
}

const fastFn = () => {}

benchmark(slowFn);
benchmark(fastFn);

show();
```

### Benchmarking of asynchronous functions
```javascript
const benchmark = require('../index');

const slowTimer = () => new Promise(res => setTimeout(res, 200));
const fastTimer = () => new Promise(res => setTimeout(res, 50));

const fn = async () => {
  await benchmark.benchmarkPromise(slowTimer);
  await benchmark.benchmarkPromise(fastTimer);
  benchmark.show();
};

fn();
```

<kbd>![node-microbenchmark](https://raw.githubusercontent.com/yashladha/node-microbenchmark/master/images/node-microbenchmark.png)</kbd>

## Future enhancements

* Benchmark async code like promises.

## Author

* [yashLadha](https://github.com/yashLadha)
